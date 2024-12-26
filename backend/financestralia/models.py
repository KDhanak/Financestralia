from django.db import models

class Advisor(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    office = models.CharField(max_length=500, null=True, blank=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
