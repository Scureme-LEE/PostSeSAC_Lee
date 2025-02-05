from django.urls import path
from . import views

urlpatterns=[
    path('',views.hello,name='hello'), # 루트 경로에 연결
]