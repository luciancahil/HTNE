from bs4 import BeautifulSoup
import requests
import urllib.request
import sys
import time
import pandas as pd

# politifact currently has 638 pages as of 01/15/2021
model = []

for page in range(1, 2):

    try:

        url = "https://www.politifact.com/factchecks/list/?page=" + str(page)

        response = requests.get(url)

        if response:

            soup = BeautifulSoup(response.text, "html.parser")

            links = soup.find_all('li', attrs={'class': 'o-listicle__item'})

            for link in links:

                data = {}

                data["who"] = link.find(
                    'a', attrs={'class': 'm-statement__name'}).text.strip()

                data["what"] = link.find(
                    'div', attrs={'class': 'm-statement__quote'}).text.strip()

                meta = link.find(
                    'div', attrs={'class': 'm-statement__desc'}).text.strip()

                data["when"] = meta[meta.find(
                    ' on ') + 4: meta.find(' in ')]

                data["where"] = meta[meta.find(' in ') + 1: -1]

                data["fact-check"] = link.find(
                    'div', attrs={'class': 'm-statement__meter'}).find('picture').find('img').get('alt')

                model.append(data)

                break

    except Exception as e:

        error_type, error_obj, error_info = sys.exc_info()
        print('ERROR FOR LINK:', url)
        print(error_type, 'Line:', error_info.tb_lineno)


print(model)
print(len(model))
