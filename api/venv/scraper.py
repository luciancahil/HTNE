from bs4 import BeautifulSoup
import requests
import urllib.request
import sys
import time
import pandas as pd

# politifact currently has 638 pages as of 01/15/2021
model = []

for page in range(1, 11):

    try:

        response = requests.get(
            "https://www.politifact.com/factchecks/list/?page=" + str(page))

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

                data["when"] = meta[meta.find('on') + 3: meta.find('in') - 1]

                data["where"] = meta[meta.find('in') + 3:]

                data["fact-check"] = link.find(
                    'div', attrs={'class': 'm-statement__meter'}).find('picture').find('img').get('alt')

                model.append(data)

    except Exception as e:
        print(sys.exc_info)


print(model)
print(len(model))
