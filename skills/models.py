from django.db import models


class KeySkill(models.Model):
    year = models.CharField(max_length=4)
    key_skills = models.CharField(max_length=250)
    added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.year)

    def skills_as_list(self):
        return self.key_skills.split(', ')
