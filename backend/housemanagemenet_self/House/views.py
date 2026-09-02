from django.shortcuts import render
# from .serializer import HouseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
class HouseAPI(APIView):
    def post(self,request):
        serializer = HouseSerializer(data=request.data)
        print(serializer)
        if serializer .is_valid():
            serializer.save()
            return Response(
            {
                "message":"User is Created",
                "details":serializer.data
            },
            status = status.HTTP_201_CREATED
        )
        print(serializer.errors)
        return Response(
            {
                "message":"Require all field"
            },
            status = status.HTTP_400_BAD_REQUEST
        )
        


