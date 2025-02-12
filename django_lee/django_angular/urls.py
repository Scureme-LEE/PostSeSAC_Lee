from django.urls import re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    re_path(r'^$',    
            serve,
            {'path': 'index.html', 'document_root': settings.STATICFILES_DIRS[0]}),
            # http://127.0.0.1:8000/angular/ 열었을 때 serve 함수 수행하여 settings.STATICFILES_DIRS[0]에서 index.html 가져옴
]
