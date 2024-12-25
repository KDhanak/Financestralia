from django.db import models

class Advisor(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    office = models.CharField(max_length=500)
    speciality = models.CharField(max_length=500)
    gender = models.CharField(max_length=500)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
