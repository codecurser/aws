import os
import glob

def fix_clip_text():
    files = glob.glob('src/components/*.tsx') + glob.glob('src/*.tsx')
    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Replace bg-clip text remnants
        content = content.replace(' bg-clip-text text-transparent', ' text-[#7C3AED]')
        content = content.replace('text-transparent bg-clip-text', 'text-[#7C3AED]')
        
        # Cleaning up double text colors
        content = content.replace('text-[#7C3AED] font-semibold  text-[#7C3AED]', 'text-[#7C3AED] font-semibold')
        content = content.replace('text-[#7C3AED] font-semibold text-[#7C3AED]', 'text-[#7C3AED] font-semibold')
        content = content.replace('text-[#4C1D95] mb-2  text-[#7C3AED]', 'mb-2 text-[#4C1D95]')
        content = content.replace('text-[#4C1D95] mb-2 text-[#7C3AED]', 'mb-2 text-[#4C1D95]')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    fix_clip_text()
