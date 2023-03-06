from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=100, unique=True, null=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return self.name


class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="salerecords",
        on_delete=models.CASCADE,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="salerecords",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="salerecords",
        on_delete=models.CASCADE,
    )

    price = models.PositiveIntegerField(null=True)
