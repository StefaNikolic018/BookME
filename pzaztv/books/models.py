from django.db import models
from django.conf import settings


# MODELS
class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to = 'images/')


    def __str__(self) -> str:
        return self.title

    def has_an_image(self) -> bool:
        return self.image == ''

    class Meta:
        ordering: ['title']

class List(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='lists', on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    book_list = models.ManyToManyField(Book)
    
    class Meta:
        ordering = ['-id']

    def __str__(self) -> str:
        return self.title