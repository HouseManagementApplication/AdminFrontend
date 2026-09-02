from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=10);
    password = models.CharField(max_length=10);
    email = models.EmailField(unique=True);

    def __str__(self):
        return self.email

class Employee(models.Model):
    employee_id =models.CharField(max_length =15);
    emp_name = models.CharField(max_length = 50);
    email = models.EmailField(unique = True);
    phone = models.IntegerField(unique = True);
    salary = models.IntegerField()

    def __str__(self):
        return self.employee_id