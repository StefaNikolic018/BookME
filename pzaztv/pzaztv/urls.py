"""
URL configuration for pzaztv project.
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

from books import views

urlpatterns = [
    path('', include('books.urls')),
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('login/', views.Login.as_view(), name='login'),
    path('lists/', views.Lists.as_view(), name='lists'),
    path('retrieve-update-destroy-list/<int:pk>/', views.RetrieveUpdateDestroyList.as_view(), name='retrieve-update-destroy-list'),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
