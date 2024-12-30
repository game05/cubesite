# Script pour surveiller et auto-commit les changements
$projectPath = $PSScriptRoot
$filter = '*.*'  # Surveille tous les types de fichiers
$fsw = New-Object IO.FileSystemWatcher $projectPath, $filter -Property @{ 
    IncludeSubdirectories = $true
    NotifyFilter = [IO.NotifyFilters]'FileName, DirectoryName, LastWrite'
}

# Fonction pour gérer les changements
function Handle-Change {
    param($changeType)
    
    # Attendre un peu pour s'assurer que tous les fichiers sont bien écrits
    Start-Sleep -Seconds 2
    
    # Vérifier s'il y a des changements à commiter
    $changes = git status --porcelain
    if ($changes) {
        Write-Host "💫 Modifications détectées ($changeType). Auto-commit en cours..."
        git add .
        git commit -m "🔄 Auto-commit: $changeType détecté"
        git push origin main
        Write-Host "✨ Changements poussés avec succès !" -ForegroundColor Green
    }
}

# Enregistrer les événements à surveiller
$handlers = . {
    Register-ObjectEvent $fsw Created -Action { 
        Handle-Change "Nouveau fichier créé"
    }
    Register-ObjectEvent $fsw Changed -Action { 
        Handle-Change "Fichier modifié"
    }
    Register-ObjectEvent $fsw Deleted -Action { 
        Handle-Change "Fichier supprimé"
    }
    Register-ObjectEvent $fsw Renamed -Action { 
        Handle-Change "Fichier renommé"
    }
}

# Activer la surveillance
$fsw.EnableRaisingEvents = $true

Write-Host "🔍 Surveillance active des changements dans $projectPath" -ForegroundColor Cyan
Write-Host "📝 Les modifications seront automatiquement committées et poussées" -ForegroundColor Cyan
Write-Host "⚡ Appuyez sur Ctrl+C pour arrêter la surveillance" -ForegroundColor Yellow

try {
    # Maintenir le script en cours d'exécution
    while ($true) { Start-Sleep -Seconds 1 }
}
finally {
    # Nettoyage à la sortie
    $fsw.EnableRaisingEvents = $false
    $handlers | ForEach-Object { Unregister-Event $_.Name }
    $fsw.Dispose()
    Write-Host "`n🛑 Surveillance arrêtée" -ForegroundColor Red
}
