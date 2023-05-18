import re
import requests
from datetime import timedelta, datetime


class HHParser():

    def __init__(self):
        pass

    def get_last_workday(self):
        today = datetime.now()
        offset = max(1, (today.weekday() + 6) % 7 - 3)
        delta = timedelta(offset)
        most_recent = today - delta
        return str(most_recent).split(' ')[0]

    def clean_html_tags(self, string: str):
        template = re.compile('<.*?>')
        cleantext = re.sub(template, '', string)

        template = re.compile('&.*?;')
        cleantext = re.sub(template, '', cleantext)

        return cleantext

    def get_vacancies(self):
        date = self.get_last_workday()
        params = {
            'text': 'python',
            'date_from': date,
            'date_to': date,
        }
        resp = requests.get('https://api.hh.ru/vacancies', params=params)
        return resp.json()

    def get_every_vacancy(self, vacancy_id: str):
        resp = requests.get(f'https://api.hh.ru/vacancies/{vacancy_id}')
        return resp.json()

    def parse_vacancies(self):
        vacancies = self.get_vacancies()
        vacancyList = []
        _ = 0
        for vacancy in vacancies['items']:
            if _ == 10:
                break
            data = self.get_every_vacancy(vacancy['id'])

            name = data['name']

            description = data['description']

            skills = ''
            for skill in data['key_skills']:
                skills += f"{skill['name']}, "
            skills = skills[:-2]

            try:
                salary = data['salary']['from']
                currency = data['salary']['currency']
            except TypeError:
                salary = 'Не указано'
                currency = ''

            region = data['area']['name']

            company = data['employer']['name']
            date_published = data['published_at'].split('T')[0]

            vacancyList.append(
                {
                    'name': name,
                    'area': region,
                    'description': self.clean_html_tags(description),
                    'skills': skills,
                    'company': company,
                    'logo': data['employer']['logo_urls'],
                    'salary': f"{salary} {currency}",
                    'date_published': date_published,
                    'url': data['alternate_url']
                }
            )
            _ += 1
        return vacancyList


if __name__ == '__main__':
    hh = HHParser()
