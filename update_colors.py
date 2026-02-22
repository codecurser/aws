import os
import glob
import re

def update_colors():
    files = glob.glob('src/components/*.tsx') + glob.glob('src/*.tsx')

    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Backgrounds - App/Sections
        content = re.sub(r'bg-aws-squid/9[05]', 'bg-[#F3EDEE]/95', content)
        content = re.sub(r'from-aws-squid', 'from-[#F3EDEE]', content)
        content = re.sub(r'to-aws-squid', 'to-[#F3EDEE]', content)
        content = re.sub(r'bg-aws-squid', 'bg-[#F3EDEE]', content)
        content = re.sub(r'from-gray-900', 'from-[#F3EDEE]', content)
        content = re.sub(r'to-yamuna-blue', 'to-[#F3EDEE]', content)
        content = re.sub(r'from-yamuna-blue', 'from-[#F3EDEE]', content)
        content = re.sub(r'bg-\[\#1a1a1a\]', 'bg-[#F3EDEE]', content)
        
        # Cards and containers inside sections
        # Replace gray backgrounds with white + soft purple shadow
        content = re.sub(r'bg-gray-800/90', 'bg-white shadow-[0_4px_20px_rgba(124,58,237,0.15)]', content)
        content = re.sub(r'bg-gray-[789]00', 'bg-white shadow-[0_4px_20px_rgba(124,58,237,0.15)]', content)
        content = re.sub(r'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[a-z]+', 'bg-white backdrop-blur-xl shadow-[0_4px_20px_rgba(124,58,237,0.15)]', content)
        content = re.sub(r'from-white/10 to-white/5', 'from-white to-white', content)
        content = re.sub(r'bg-white/10', 'bg-[#7C3AED]/10', content)
        
        # Text colors
        # Except where buttons are used (we'll fix buttons shortly)
        content = re.sub(r'text-white', 'text-[#4C1D95]', content)
        content = re.sub(r'text-gray-100', 'text-[#4C1D95]', content)
        content = re.sub(r'text-gray-200', 'text-[#5B4B5C]', content)
        content = re.sub(r'text-gray-300', 'text-[#5B4B5C]', content)
        content = re.sub(r'text-gray-400', 'text-[#5B4B5C]', content)
        content = re.sub(r'text-gray-500', 'text-[#5B4B5C]', content)
        content = re.sub(r'text-gray-600', 'text-[#5B4B5C]', content)
        
        # Borders
        content = re.sub(r'border-white/20', 'border-[#7C3AED]/20', content)
        content = re.sub(r'border-white/10', 'border-[#7C3AED]/10', content)
        content = re.sub(r'border-white/30', 'border-[#7C3AED]/30', content)
        content = re.sub(r'border-gray-[789]00', 'border-[#7C3AED]/20', content)
        
        # Since we turned text-white into text-[#4C1D95], let's ensure buttons stay purple/white
        # Any component that has px- and py- and rounded is probably a button
        content = re.sub(r'(px-\d+\s+py-\d+(?:\.\d+)?.*?bg-gradient-to-r.*?)text-\[\#4C1D95\]', r'\1text-white', content)
        content = re.sub(r'(px-\d+\s+py-\d+(?:\.\d+)?.*?bg-\[\#7C3AED\]/10.*?)text-\[\#4C1D95\]', r'\1text-[#4C1D95]', content) # keep outline buttons text purple
        
        # Some specific button overrides
        content = re.sub(r'bg-gradient-to-r from-sunset-purple via-sunset-pink to-sunset-orange text-\[\#4C1D95\]', 'bg-[#7C3AED] hover:bg-[#5B21B6] text-white', content)
        content = re.sub(r'bg-gradient-to-r from-sunset-purple via-sunset-pink to-sunset-orange', 'bg-gradient-to-r from-[#7C3AED] via-[#5B21B6] to-[#4C1D95]', content)
        
        # Gradient text that was from-sunset-purple to sunset-orange -> purple gradient
        content = re.sub(r'from-sunset-purple via-sunset-pink to-sunset-orange', 'from-[#7C3AED] via-[#5B21B6] to-[#4C1D95]', content)
        
        content = re.sub(r'from-white via-gray-100 to-gray-200', 'from-[#4C1D95] via-[#5B21B6] to-[#7C3AED]', content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    update_colors()
