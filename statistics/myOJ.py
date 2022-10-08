import requests
from bs4 import BeautifulSoup

HEADERS = {
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.55",
        "cookie": "<your-cookie>"
	}

class OJparser:
    def __init__(self, headers=HEADERS):
        self.headers = headers

    def parse(self, pid, logfile, datafile):
        page = 0
        url = f"https://programming.pku.edu.cn/probset/{pid}/ranks.do"
        resp = requests.get(url, headers=self.headers)
        bs = BeautifulSoup(resp.text, 'lxml')
        logfile.write(bs.prettify())
        for tr in bs.find_all('tr')[1:]:
            tddata = []
            for td in tr.find_all(name='td'):
                _td = td.text.strip()
                tddata.append(_td.replace(' ', '-') if _td else 'None')
            datafile.write(' '.join(tddata) + '\n')
        resp.close()
