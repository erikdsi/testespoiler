from django.db import models

class Ponto(models.Model):
    endereco = models.CharField(max_length=512)
    latitude = models.DecimalField(max_digits=20, decimal_places=10, blank=True, null=True)
    longitude = models.DecimalField(max_digits=20, decimal_places=10, blank=True, null=True)
# Create your models here.
