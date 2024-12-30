# Script pour automatiser les commits et pushes Git
$changes = git status --porcelain
if ($changes) {
    Write-Host "Modifications détectées. Commit et push automatiques..."
    git add .
    git commit -m "🔄 Auto-commit: Mise à jour des fichiers modifiés"
    git push origin main
    Write-Host "Changements poussés avec succès !"
} else {
    Write-Host "Aucune modification détectée."
}
