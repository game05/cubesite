import os
import datetime
from pathlib import Path

def analyser_structure(chemin_base):
    resultat = []
    
    # Fichiers et dossiers importants à surveiller
    fichiers_importants = {
        'package.json',
        'next.config.js',
        'tsconfig.json',
        'tailwind.config.ts',
        'postcss.config.js',
        'README.md',
        '.gitignore',
        'next-env.d.ts'
    }
    
    dossiers_importants = {
        'src',
        'public'
    }
    
    # Dossiers à ignorer complètement
    dossiers_ignores = {'.git', 'node_modules', '__pycache__', '.next', 'doc'}

    def analyser_recursif(chemin, niveau=0):
        try:
            items = sorted(os.listdir(chemin))
            for item in items:
                chemin_complet = os.path.join(chemin, item)
                
                if os.path.isdir(chemin_complet):
                    if item in dossiers_ignores:
                        continue
                    if item in dossiers_importants or niveau > 0:
                        resultat.append(f"{'  ' * niveau}📁 {item}/")
                        # Pour les dossiers importants, on analyse leur contenu
                        analyser_recursif(chemin_complet, niveau + 1)
                else:
                    # Pour le niveau racine, on ne montre que les fichiers importants
                    if niveau == 0:
                        if item in fichiers_importants:
                            resultat.append(f"{'  ' * niveau}📄 {item}")
                    # Pour les sous-dossiers, on montre tous les fichiers
                    else:
                        resultat.append(f"{'  ' * niveau}📄 {item}")
                        
        except Exception as e:
            pass

    analyser_recursif(chemin_base)
    return resultat

def main():
    # Chemin du projet
    projet_path = "C:/Users/prive/Desktop/cubesite"
    
    # Analyse de la structure
    print(f"Analyse de la structure du projet: {projet_path}")
    structure = analyser_structure(projet_path)
    
    # Création du fichier de sortie
    output_file = os.path.join(projet_path, "doc", "structure_projet.txt")
    
    # Écriture des résultats
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"Structure principale du projet CubeSite\n")
        f.write(f"Date d'analyse: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write("=" * 80 + "\n\n")
        f.write("Fichiers de configuration et documentation :\n")
        for ligne in structure:
            f.write(ligne + "\n")
    
    print(f"L'analyse est terminée. Résultats sauvegardés dans: {output_file}")

if __name__ == "__main__":
    main()
