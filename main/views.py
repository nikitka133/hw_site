from django.shortcuts import render
from .models import Description


def index(request):
    context = {'description': Description.objects.all}
    return render(
        request,
        "main/index.html",
        context=context
    )
