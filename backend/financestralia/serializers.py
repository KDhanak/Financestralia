from rest_framework import serializers
from .models import Advisor, Query

class AdvisorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advisor
        fields = '__all__'
        
class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = '__all__'
