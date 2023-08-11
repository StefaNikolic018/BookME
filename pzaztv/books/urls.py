from django.urls import path

from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('books', views.BooksViewSet)


app_name = 'books'
urlpatterns = router.urls