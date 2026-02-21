import os
import glob

# Find all .astro files
for filepath in glob.glob('src/**/*.astro', recursive=True):
    with open(filepath, 'rb') as f:
        content = f.read()
    
    original = content
    # Fix the encoding issues
    # These are UTF-8 bytes being interpreted as Latin-1
    content = content.replace(b'\xc3\xa2\xc2\x80\xc2\x93', b'\xe2\x80\x93')  # â€ -> –
    content = content.replace(b'\xc3\xa2\xc2\x80\xc2\x99', b'\xe2\x80\x99')  # â€™ -> '
    content = content.replace(b'\xc3\xa2\xc2\x80\xc2\x9c', b'\xe2\x80\x9c')  # â€œ -> "
    content = content.replace(b'\xc3\xa2\xc2\x80\xc2\x9d', b'\xe2\x80\x9d')  # â€ -> "
    
    if content != original:
        with open(filepath, 'wb') as f:
            f.write(content)
        print(f'Fixed: {filepath}')

print('Done')
