from rest_framework.serializers import ModelSerializer

from .models import Book, List

class BookSerializer(ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"

class ListSerializer(ModelSerializer):
    class Meta:
        model = List
        fields = "__all__"