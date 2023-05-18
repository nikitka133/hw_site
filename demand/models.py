from django.db import models


class DemandData(models.Model):

    name = models.CharField(max_length=300)
    years = models.CharField(max_length=500, default='')
    data = models.CharField(max_length=500)
    individual_id = models.CharField(max_length=100)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)

    def values_as_dict(self):
        values = {}
        data = self.data.split(', ')
        years = self.years.split(', ')
        for i in data:
            index = data.index(i)
            values[years[index]] = i
        return values
