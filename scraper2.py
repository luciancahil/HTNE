from bs4 import BeautifulSoup
import requests
import urllib.request
import sys
import time
import pandas as pd

# politifact currently has 638 pages as of 01/15/2021
model = []

query = input("query\n")

for page in range(1, 11):

    try:

        url = "https://www.politifact.com/search/factcheck/?q=" + \
            str(query) + "&page=" + str(page)

        response = requests.get(url)

        if response:

            soup = BeautifulSoup(response.text, "html.parser")

            links = soup.find_all('div', attrs={'class': 'o-listease__item'})

            for link in links:

                data = {}

                data["what"] = link.find(
                    'div', attrs={'class': 'c-textgroup__title'}).find('a').text.strip()

                meta = link.find(
                    'div', attrs={'class': 'c-textgroup__author'}).text.strip()

                data['who'] = meta[:meta.find(' stated ')]

                data["when"] = meta[meta.find(
                    ' on ') + 4: meta.find(' in ')]

                data["where"] = meta[meta.find(' in ') + 3: -1]

                data["fact-check"] = link.find(
                    'img', attrs={'class': 'c-image__original'}).get('src').split('/')[-2][6:]

                model.append(data)

    except Exception as e:

        error_type, error_obj, error_info = sys.exc_info()
        print('ERROR FOR LINK:', url)
        print(error_type, 'Line:', error_info.tb_lineno)


print(model)
print(len(model))
