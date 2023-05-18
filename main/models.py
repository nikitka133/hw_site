from django.db import models


class Description(models.Model):

    title = models.CharField(max_length=300)
    text = models.TextField()
    individual_class = models.CharField(max_length=200)
    picture = models.CharField(max_length=200)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.title)
