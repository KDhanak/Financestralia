from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Advisor
from .serializers import AdvisorSerializer

class AdvisorView(APIView):
    def get(self, request, *args, **kwargs):
        items = Advisor.objects.all()
        serializer = AdvisorSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
