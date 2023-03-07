from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse('api_show_technician', kwargs={"id": self.id})


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    customer_name = models.CharField(max_length=100)
    date = models.DateTimeField(null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )
    reason = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"id": self.id})
