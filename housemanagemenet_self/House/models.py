# from django.db import models

# # Create your models here.
# class House(models.Model):
#     house_id = models.CharField(max_length=15,unique=True,blank=True)
#     user_id = models.CharField(max_length = 50)
#     house_name=models.CharField(max_length=50)
#     house_number=models.CharField(max_length=50)
#     owner_number=models.IntegerField(default=0)
#     floor_number=models.IntegerField(default=0)
#     meter_number=models.CharField(max_length=50)
#     property_details=models.CharField(max_length=250)
#     property_document=models.ImageField(upload_to='documents/')
#     property_photo=models.ImageField(upload_to='photos/',)
#     address=models.CharField(max_length=250)
    

#     def save(self,*args,**kwargs):
#         if not self.house_id:
#             last_house_number = House.objects.order_by("-id").first()

#             if last_house_number:
#                 last_number = int(last_house_number.house_id.replace("HSE",""))
#                 self.house_id = f"HSE{last_number+1:03d}"
#             else:
#                 self.house_id="HSE0001"
#         super().save(*args,**kwargs)
