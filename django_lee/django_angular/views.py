from django.views.generic import TemplateView

class AngularView(TemplateView):
    template_name='index.html'
    #Angular 빌드의 index.html 출력