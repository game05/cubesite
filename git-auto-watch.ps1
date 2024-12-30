# Script pour surveiller et auto-commit les changements
$projectPath = $PSScriptRoot
$filter = '*.*'  # Surveille tous les types de fichiers
$fsw = New-Object IO.FileSystemWatcher $projectPath, $filter -Property @{ 
    IncludeSubdirectories = $true
    NotifyFilter = [IO.NotifyFilters]'FileName, DirectoryName, LastWrite'
}

# Fonction pour gérer les changements
function Handle-GitOperations {
    Write-Host "Vérification des changements..." -ForegroundColor Cyan
    $changes = git status --porcelain
    if ($changes) {
        Write-Host "Modifications détectées ! Commit en cours..." -ForegroundColor Yellow
        git add .
        git commit -m "🔄 Auto-commit: Modifications détectées"
        git push origin main
        Write-Host "✅ Changements poussés avec succès !" -ForegroundColor Green
    }
}

Write-Host "🔍 Démarrage de la surveillance..." -ForegroundColor Cyan
Write-Host "📂 Dossier surveillé : $projectPath" -ForegroundColor Cyan

while ($true) {
    Handle-GitOperations
    Start-Sleep -Seconds 5
    Write-Host "⏳ En attente de modifications..." -ForegroundColor Gray
}
