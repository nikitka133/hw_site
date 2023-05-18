from django.shortcuts import render
from .models import KeySkill


def index(request):
    context = {'key_skills': KeySkill.objects.all()}
    return render(request, "skills/index.html", context=context)
