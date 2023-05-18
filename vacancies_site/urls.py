from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('demand/', include('demand.urls')),
    path('geography/', include('geography.urls')),
    path('last_vacancies/', include('last_vacancies.urls')),
    path('skills/', include('skills.urls')),
    path('', include('main.urls')),
]
