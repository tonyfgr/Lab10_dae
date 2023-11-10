from django.db import models

class Product(models.Model):
    codigo = models.IntegerField()
    descripcion = models.CharField(max_length=255)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
