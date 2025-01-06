from django.urls import path
from .views import AdvisorView

urlpatterns = [
    path('advisors/', AdvisorView.as_view(), name="fetch advisors")
]
