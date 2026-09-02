from django.urls import path
from .views import LoginAPI,SignupAPI,UsersAPI

urlpatterns=[
    path("Login/",LoginAPI.as_view(),name="Login"),
    path("Signup/",SignupAPI.as_view(),name="Signup"),
    path("users/<str:user_id>",UsersAPI.as_view(),name="users")
]