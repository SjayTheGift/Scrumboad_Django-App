from rest_framework.viewsets import ModelViewSet
from .models import List, Card
from .serializers import ListSerializer, CardSerializer
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator

@method_decorator(login_required, name='dispatch')
class ListViewSet(ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer
    
@method_decorator(login_required, name='dispatch')
class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer