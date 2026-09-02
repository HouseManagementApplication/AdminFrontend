from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import User
from .serializer import UserSerializer

# Create your views here.
class LoginAPI(APIView):
    def post(self,request):
        email = request.data.get("email")
        password = request.data.get("password")
        if not email or not password:
            return Response(
                {
                    "message":"email and password is required"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        user = User.objects.filter(email=email,password=password).first()
        if user is None:
            return Response(
                {
                    "message":"user not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
    
        return Response({
            "message":"user login successfull",
            "name":user.name,
            "user_id":user.user_id
        },
        status = status.HTTP_200_OK
        )

class SignupAPI(APIView):
    

    def post(self,request):
        serializer= UserSerializer(data=request.data)
        print(request.data)
        if not serializer .is_valid():
            print(serializer.errors)
            return Response(
                {
                    "message":"Required all Fields"
                },
                status= status.HTTP_400_BAD_REQUEST
            )
        if serializer .is_valid():
            serializer.save()
            return Response(
                {
                    "message":"User created Succesfull"
                    
                },
                status = status.HTTP_201_CREATED
            ) 

class UsersAPI(APIView):
    def get(self,request,user_id):
        if not user_id:
            return Response(
                {
                    "message":"user_id is required"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        user = User.objects.filter(user_id =user_id).first()
        if user is None:
            return Response(
                {
                    "message":"User Not Found"
                },
                status= status.HTTP_404_NOT_FOUND
            )
        serializer =UserSerializer(user)
        return Response(
            {
                "message":"userData",
                "details":serializer.data
            },
            status = status.HTTP_200_OK
        )