from django.contrib import admin
from django.urls import path , include
from django.conf import settings    # setting.py의 내용 가져오기기
from django.conf.urls.static import static    
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='index.html')), # 프론트엔드 선택 화면 연결
####    path('',include('hello.urls')), # hello 앱의 url에 연결
    # path('angular/',TemplateView.as_view(template_name='angular_temp/index.html')),
    # path('react/',TemplateView.as_view(template_name='react_temp/index.html')),
    # path('vue/',TemplateView.as_view(template_name='vue_temp/index.html')) 
    #### static()이 있으므로 불필요 해서 제거
]

urlpatterns += static(    #static()을 추가하기 위해 urlpatterns+= 사용
    '/angular/',    # http://127.0.0.1:8000/angular/ 로 요청 시
    document_root=settings.STATICFILES_DIRS[0]    #Angular 빌드 폴더 서빙
    )

urlpatterns += static(
    '/react/',    # http://127.0.0.1:8000/react/ 로 요청 시시
    document_root=settings.STATICFILES_DIRS[1]    #React 빌드 폴더 서빙
    )

urlpatterns += static(
    '/vue/',    # http://127.0.0.1:8000/react/ 로 요청 시
    document_root=settings.STATICFILES_DIRS[2]    #Vue 빌드 폴더 서빙
    )


