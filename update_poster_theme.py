import os
import glob

def replace_in_files(pattern_exts, replacements):
    for ext in pattern_exts:
        for filepath in glob.glob(f"src/**/*{ext}", recursive=True):
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
                
            if new_content != content:
                print(f"Updated {filepath}")
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)

replacements = {
    '#F3EDEE': '#DFA8F0',  # Poster background softer/darker purple
    '#5B4B5C': '#2D1B36',  # Darker text for readability 
}

replace_in_files(['.tsx', '.css'], replacements)

# Also update App.tsx specifically since it's in src/
