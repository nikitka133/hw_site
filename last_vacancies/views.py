from django.shortcuts import render
from .parser import HHParser as hh


def index(request):
    vacancies = hh().parse_vacancies()
    context = {'vacancies': vacancies}
    return render(request, "last_vacancies/index.html", context=context)
