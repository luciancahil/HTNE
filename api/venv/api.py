from flask import Flask, redirect
from flask import request
from bs4 import BeautifulSoup
from flask_cors import CORS, cross_origin
import requests
import urllib.request
import sys
import time
import pandas as pd
import json
from os import environ

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['FLASK_APP'] = environ.get('FLASK_APP')

def scraper(query):
    # politifact currently has 638 pages as of 01/15/2021
    model = []

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

                    data["fact_check"] = link.find(
                        'img', attrs={'class': 'c-image__original'}).get('src').split('/')[-2][6:]

                    model.append(data)

        except Exception as e:

            error_type, error_obj, error_info = sys.exc_info()
            print('ERROR FOR LINK:', url)
            print(error_type, 'Line:', error_info.tb_lineno)


    return model



@app.route('/api/')
def api_test():
    return {'message': 'Welcome from Flask'}

@app.route('/api/scrape/<query>')
def api_scrape(query):
    return json.dumps(scraper(query), indent=4)

@app.route('/api/scrape', methods=['POST'])
def api_scraper():
        query = request.args.get('query')
        return json.dumps(scraper(query), indent=4)
        