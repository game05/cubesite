# Script pour surveiller et auto-commit les changements
$projectPath = $PSScriptRoot
$lastCommitHash = git rev-parse HEAD

# Fonction pour vérifier s'il y a de vrais changements
function Has-Changes {
    $status = git status --porcelain
    return ![string]::IsNullOrEmpty($status)
}

# Fonction pour gérer les changements
function Handle-GitOperations {
    if (Has-Changes) {
        $currentHash = git rev-parse HEAD
        if ($currentHash -eq $lastCommitHash) {
            Write-Host " Nouvelles modifications détectées !" -ForegroundColor Yellow
            git add .
            git commit -m " Auto-commit: Modifications détectées"
            git push origin main
            $script:lastCommitHash = git rev-parse HEAD
            Write-Host " Changements poussés avec succès !" -ForegroundColor Green
        }
    }
}

Write-Host " Démarrage de la surveillance..." -ForegroundColor Cyan
Write-Host " Dossier surveillé : $projectPath" -ForegroundColor Cyan
Write-Host " Appuyez sur Ctrl+C pour arrêter la surveillance" -ForegroundColor Yellow

while ($true) {
    Handle-GitOperations
    Start-Sleep -Seconds 10
    Write-Host " En attente de modifications..." -ForegroundColor Gray
}
