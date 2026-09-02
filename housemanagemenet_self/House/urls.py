from django.urls import path
from .views import HouseAPI


urlpatterns =[
    path("house/", HouseAPI.as_view(),name="House"),
]