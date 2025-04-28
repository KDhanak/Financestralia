from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Advisor
from .serializers import AdvisorSerializer, QuerySerializer

class AdvisorView(APIView):
    def get(self, request, *args, **kwargs):
        items = Advisor.objects.all()
        serializer = AdvisorSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class QueryView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = QuerySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
