from django.shortcuts import render
from .models import DemandData


def index(request):
    demand = DemandData.objects.all()
    context = {'demand': demand}
    return render(request, "demand/index.html", context=context)
