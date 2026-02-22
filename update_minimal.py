import os
import glob
import re

def minimal_theme():
    files = glob.glob('src/components/*.tsx') + glob.glob('src/*.tsx')
    for filepath in files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # --- 1. Backgrounds & Sections ---
        # Strip all generic gradients
        content = re.sub(r'bg-gradient-to-[a-z]+\s+from-[^\s"\'}]+(?:\s+via-[^\s"\'}]+)?(?:\s+to-[^\s"\'}]+)?', '', content)
        
        # Convert any remaining dark background classes to light beige
        content = re.sub(r'bg-gray-[0-9]+(?:\/[0-9]+)?', 'bg-[#F3EDEE]', content)
        content = re.sub(r'bg-aws-squid(?:\/[0-9]+)?', 'bg-[#F3EDEE]', content)
        content = re.sub(r'bg-yamuna-blue(?:\/[0-9]+)?', 'bg-[#F3EDEE]', content)
        content = re.sub(r'bg-\[\#1a1a1a\]', 'bg-[#F3EDEE]', content)
        content = re.sub(r'bg-\[\#F3EDEE\]/9[05]', 'bg-[#F3EDEE]', content)
        
        # Clean up empty classes left by gradient stripping
        content = content.replace('className=" "', 'className=""')
        
        # Set cards to pure white with soft shadow
        # Match previous card classes
        content = content.replace('bg-[#F3EDEE] backdrop-blur-xl shadow-[0_4px_20px_rgba(124,58,237,0.15)]', 'bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)]')
        content = content.replace('bg-white shadow-[0_4px_20px_rgba(124,58,237,0.15)]', 'bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)]')
        content = content.replace('backdrop-blur-md', '')
        content = content.replace('backdrop-blur-xl', '')
        content = content.replace('backdrop-blur-sm', '')
        
        # --- 2. Borders & Shadows ---
        content = re.sub(r'border-\[\#7C3AED\]\/[0-9]+', 'border-[#7C3AED]/20', content)
        content = re.sub(r'shadow-sunset-purple\/[0-9]+', 'shadow-[#7C3AED]/10', content)
        content = content.replace('shadow-lg shadow-[#7C3AED]/10', 'shadow-sm shadow-[#7C3AED]/10')
        
        # --- 3. Colors for specific elements ---
        # Buttons Solid
        # We look for typical button classes that had bg-gradient previously or bg-white/10
        # Button standard class in Hero/Navbar/Sponsors
        content = re.sub(r'group inline-flex items-center px-6 py-3\s+text-white rounded-full font-bold', 'group inline-flex items-center px-6 py-3 bg-[#7C3AED] hover:bg-[#5B21B6] text-white rounded-full font-bold', content)
        content = re.sub(r'group relative px-6 py-3 sm:px-8 sm:py-3.5\s+text-white rounded-lg font-bold', 'group relative px-6 py-3 sm:px-8 sm:py-3.5 bg-[#7C3AED] hover:bg-[#5B21B6] text-white rounded-lg font-bold', content)
        content = re.sub(r'text-\[\#4C1D95\] px-6 py-3 rounded-full text-sm font-bold', 'bg-[#7C3AED] hover:bg-[#5B21B6] text-white px-6 py-3 rounded-full text-sm font-bold', content)
        content = re.sub(r'text-\[\#4C1D95\]\s+block px-4 py-3 rounded-lg text-base font-bold text-center', 'bg-[#7C3AED] hover:bg-[#5B21B6] text-white block px-4 py-3 rounded-lg text-base font-bold text-center', content)
        
        # Buttons Outline
        content = re.sub(r'group inline-flex items-center px-6 py-3 bg-\[\#7C3AED\]\/10\s+border border-\[\#7C3AED\]\/20 text-white', 'group inline-flex items-center px-6 py-3 bg-transparent hover:bg-[#7C3AED]/10 border border-[#7C3AED] text-[#7C3AED]', content)
        content = re.sub(r'px-6 py-3 sm:px-8 sm:py-3.5 bg-\[\#7C3AED\]\/10\s+hover:bg-white\/20 text-\[\#4C1D95\] rounded-lg font-bold text-base sm:text-lg transition-all duration-300 border border-\[\#7C3AED\]\/30 hover:border-white\/50', 'px-6 py-3 sm:px-8 sm:py-3.5 border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-lg font-bold text-base sm:text-lg transition-all duration-300', content)

        # Remove "glow", "float", "particle" animations that add visual noise
        content = re.sub(r'\s*animate-float[^\s"\'}]*', '', content)
        content = re.sub(r'\s*animate-pulse[^\s"\'}]*', '', content)
        content = re.sub(r'\s*animate-rotate[^\s"\'}]*', '', content)
        content = re.sub(r'\s*animate-grid-move[^\s"\'}]*', '', content)
        content = re.sub(r'\s*animate-shimmer[^\s"\'}]*', '', content)
        content = re.sub(r'\s*animate-particle-[1-4]', '', content)
        content = re.sub(r'\s*animate-gradient', '', content)
        
        # --- 4. Typography Colors ---
        # If there are any `text-sunset-[a-z]+`, turn them to #7C3AED
        content = re.sub(r'text-sunset-[a-z]+', 'text-[#7C3AED]', content)
        content = re.sub(r'text-india-[a-z]+', 'text-[#7C3AED]', content)
        content = re.sub(r'text-marigold', 'text-[#7C3AED]', content)
        
        # Make h2/h3 strict deep purple
        content = content.replace('text-white', 'text-[#4C1D95]')
        # Fix button text that shouldn't have been replaced to deep purple
        content = content.replace('bg-[#7C3AED] hover:bg-[#5B21B6] text-[#4C1D95]', 'bg-[#7C3AED] hover:bg-[#5B21B6] text-white')
        
        # Make sure layout sections are #F3EDEE
        content = content.replace('bg-white shadow-[0_4px_20px_rgba(124,58,237,0.05)] border-t border-[#7C3AED]/20 relative overflow-hidden', 'bg-[#F3EDEE] border-t border-[#7C3AED]/10 relative overflow-hidden')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

if __name__ == "__main__":
    minimal_theme()
