from django.urls import path
from . import views

urlpatterns = [
    path('', views.financestralia, name="Financestralia backend initial stage test.")
]
