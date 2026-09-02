from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=15,unique=True,blank=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phonenumber = models.IntegerField()
    address = models.CharField(max_length=250)
    password = models.CharField(max_length= 100)

    def save(self,*args,**kwargs):

        if not self.user_id:
            last_user = User.objects.order_by("-id").first()

            if last_user:
                last_number = int(last_user.user_id.replace("USR",""))
                self.user_id = f"USR{last_number+1:03d}"
            else:
                self.user_id ="USR001" 
        super().save(*args,**kwargs)
      
    

    

# Add project-specific models here later
class Category(models.Model):
    name = models.CharField(max_length = 100)
    def __str__(self):
        return self.name
class Customer(models.Model):
    name = models.CharField(max_length= 100)
    email = models.EmailField(max_length=50)
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    is_active = models.BooleanField(default=True)

    category= models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="products"
    )
    def __str__(self):
        return self.name
class Order(models.Model):
    customer = models.ForeignKey(
        Customer,
        on_delete =models.CASCADE,
        related_name ="orders"
    )
    products =models.ManyToManyField(Product)

    price = models.DecimalField(max_digits=10,decimal_places = 2)
    def __str__(self):
        return f"Order {self.id}"