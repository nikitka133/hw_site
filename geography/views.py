from django.shortcuts import render
from .models import Geography


def index(request):
    geography = Geography.objects.all()
    context = {'info': geography}
    return render(
        request,
        "geography/index.html",
        context=context
    )
