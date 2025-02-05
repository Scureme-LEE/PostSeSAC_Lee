from django.views.generic import TemplateView
from django.urls import path

urlpatterns = [
    path('angular/', TemplateView.as_view(template_name='index.html')),
]