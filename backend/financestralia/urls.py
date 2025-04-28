from django.urls import path
from .views import AdvisorView, QueryView

urlpatterns = [
    path('advisors/', AdvisorView.as_view(), name="fetch advisors"),
    path('query/', QueryView.as_view(), name="submit query")
]
