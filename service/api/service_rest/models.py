from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=40, unique=True)
    vin = models.CharField(max_length=17, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=30)
    employee_number = models.CharField(max_length=30, unique=True)

    def get_api_id(self):
        return reverse('api_show_technician', kwargs={"id": self.id})


class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17, null=True)
    customer_name = models.CharField(max_length=30)
    date = models.DateTimeField(null=True)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.PROTECT
    )
    reason = models.CharField(max_length=100)
    vip = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)

    def get_api_id(self):
        return reverse("api_show_appointment", kwargs={"id": self.id})
