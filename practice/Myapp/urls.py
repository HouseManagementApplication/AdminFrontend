from django.urls import path
from.views import Loginview

urlpatterns =[
    path("login/",Loginview.as_view(),name ="login"),
]