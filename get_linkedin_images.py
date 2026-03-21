import requests
import re

urls = [
    'https://www.linkedin.com/in/starboyprince',
    'https://www.linkedin.com/in/anjalitalan/',
    'https://www.linkedin.com/in/aryannngoel',
    'https://www.linkedin.com/in/suhani-s-3aa9a21aa',
    'https://www.linkedin.com/in/deepanshu005',
    'https://www.linkedin.com/in/divya-mishra-b9b4b9381',
    'https://www.linkedin.com/in/mohd-aman-021261236',
    'https://www.linkedin.com/in/prabhav-varshney-82bb02399',
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}

for url in urls:
    try:
        r = requests.get(url, headers=headers, timeout=5)
        match = re.search(r'property=\"og:image\" content=\"(.*?)\"', r.text)
        if match:
            print(f'Found for {url}: {match.group(1)}')
        else:
            print(f'No image found for {url}')
    except Exception as e:
        print(f'Error on {url}: {e}')
