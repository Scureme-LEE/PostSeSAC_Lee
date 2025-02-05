from django.shortcuts import render
from django.http import HttpResponse

def hello(request):
    return HttpResponse('Hello, Django!')
# Hello, Django! 를 반환하는 뷰 생성