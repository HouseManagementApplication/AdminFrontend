from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializer import UserSerializer
# Create your views here.


# class Loginview(APIView):
#     def post (self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")

#         if not email or not password:
#             return Response(
#                 {"message":"email and password are required"},
#                 status = status.HTTP_400_BAD_REQUEST

#             )
#         user = user.objects.filter(email = email).first()

#         if user is None:
#             return Response(
#                 {"message":"User does not exist"},
#                 status = status.HTTP_404_NOT_FOUND
#             )    

#         if not user.check_password(password):
#             return Response(
#                 {"message":"Invaild Password"},
#                 status = status.HTTP_401_UNAUTHORIZED
#             )

#         return Response(
#             {
#                 "message":"Login Successful",
#                 "email":user.email,
#                 "username":user.name
#             },
#             status = status.HTTP_200_OK
#         )


# class UserAPi(APIView):
#     def get(self,request,user_id):
#         user = User.objects.filter(user_id = user_id).first()

#         if user is None:
#             return Response(
#                 {"message":"user not found"},
#                 status = status.HTTP_404_NOT_FOUND
#             )
#         serializer = UserSerializer(user)
#         return Response(
#             {
#                 "message":"userDetails",
#                 "data":serializer.data
                
#                 },
#             status = status.HTTP_200_OK
#         )    

#     def post(self,request):
#         serializer = UserSerializer(data=request.data)

#         if serializer .is_valid():
#             serializer.save()

#             return Response(
#                 {
#                     "Message":"User is created"
#                 },
#                 status = status.HTTP_201_CREATED
#             )
#         return Response(
#             {"message":"Invalid Data"},
#             status = status.HTTP_400_BAD_REQUEST
#         )
#     def put(self,request,user_id):
#         user = User.objects.filter(user_id=user_id).first()

#         if user is None:
#             return Response(
#                 {"message":"user not found"},
#                 status = status.HTTP_404_NOT_FOUND
#             )

#         serializer = UserSerializer(
#             user,
#             data=request.data

#         )
#         if serializer .is_valid():
#             serializer.save()
#             return Response(
#                 {
#                     "message":"user updated Successfully",
#                     "data":serializer.data
#                     },
#                 status = status.HTTP_200_OK
#             )
#         return Response(
#             {"mesage":"server error"},
#             status = status.HTTP_500_SERVER_ERROR
#         )    

#     def delete(self,request,user_id):
#         user = User.objects.filter(user_id=user_id).first()

#         if user is None:
#             return Response(
#                 {"message":"user not found"},
#                 status = status.HTTP_404_NOT_FOUND
#             )   

#         user.delete()
#         return Response(
#             {"message":"user DeletedSucessfully"},
#             status= status.HTTP_200_OK
#         )


import Employeeserialzer from backend.practice.Myapp.serializer

class EmployeeAPI(APIView):
    def get (self,request,emp_id):
        employee = Employee.objects.filter(emp_id =employee_id).first()
        
        if employee is None:
            return Response(
                {
                    "message":"user not found"
                },
                status = status.HTTP_404_NOT_FOUND
            )
        serializer = Employeeserializer(employee)

        return Response(
            {
                "message":"employee details",
                "data":data.serializer
             },
             status = status.HTTP_200_OK
        )

    def post(self,request):

        serializer = Employeeserialzer(data=request.data)
        
        if serializer .is_valid():
            serialzer.save()
            return Response(
                {
                    "message":"user created successfully",
                    "employee":serialzer.data["emp_name"]
                },
                status= status.HTTP_201_created
            )
        return Response(
            {
                "message":"invalid_response"
            },
            status = status.HTTP_400_BAD_REQUEST
        )    