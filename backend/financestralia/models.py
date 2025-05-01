from django.db import models

class Advisor(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500)
    office = models.CharField(max_length=500, null=True, blank=True)
    speciality = models.CharField(max_length=500, null=True, blank=True)
    role = models.CharField(max_length=500, null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female')], null=True, blank=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Query(models.Model):
    TYPE_CHOICES = [
        ("IND", "Individual"),
        ("BUS", "Business"),
    ]
    Query_TYPE_CHOICES = [
        ("SRV", "Service Enquiry"),
        ("Prop", "Request for Proposal"),
        ("GEN", "General Enquiry"),
    ]
    State_list = [
        ("NSW", "New South Wales"),
        ("VIC", "Victoria"),
        ("QLD", "Queensland"),
        ("WA", "Western Australia"),
        ("SA", "South Australia"),
        ("TAS", "Tasmania"),
        ("ACT", "Australian Capital Territory"),
        ("NT", "Northern Territory"),
        ("International", "International"),
    ]
        
    client_type = models.CharField(max_length=25, choices=TYPE_CHOICES, default="IND")
    query_type = models.CharField(max_length=25, choices=Query_TYPE_CHOICES, default="SRV")
    client_first_name = models.CharField(max_length=500)
    client_last_name = models.CharField(max_length=500)
    client_email = models.EmailField(max_length=500)
    client_phone = models.CharField(max_length=15)
    client_state = models.CharField(max_length=50, choices=State_list)
    client_postcode = models.CharField(max_length=10)
    client_message = models.TextField(null=True)
    client_business_name = models.CharField(max_length=500, null=True, blank=True)
    is_client = models.BooleanField(default=False)
    advisor = models.CharField(max_length=500, null=True, blank=True)
    def __str__(self):
        return f"{self.client_first_name} {self.client_last_name}"
