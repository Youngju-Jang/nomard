import requests

indeed_result = requests.get("https://kr.indeed.com/취업?q=python&limt=50")

#indeed_result.raise_for_status()
#indeed_result.encoding='UTF-8'

indeed_text = indeed_result.text.encode('cp949', 'ignore').decode('cp949')



# https://wikidocs.net/80654 참고사이트
# conda install -c anaconda requests  
# conda install -c anaconda beautifulsoup4