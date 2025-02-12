from django.contrib import admin
from django.urls import path , include
from django.conf import settings    # setting.py의 내용 가져오기기
from django.conf.urls.static import static    


urlpatterns = [
    path('admin/', admin.site.urls),
####    path('',include('hello.urls')), # hello 앱의 url에 연결
    path('angular/',include('django_angular.urls')), # django_angular 앱의 url에 연결
]

urlpatterns +=static(    #static()을 추가하기 위해 urlpatterns+= 사용용
    'angular/',    # http://127.0.0.1:8000/angular/ 을 url 로 설정정
    document_root=settings.STATICFILES_DIRS[0],    #Angular 빌드 폴더 서빙
    )



