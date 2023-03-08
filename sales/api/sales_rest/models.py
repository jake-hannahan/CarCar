from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200, null=False)
    employee_number = models.CharField(max_length=100, unique=True, null=False, default="unassigned")

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200, null=False)
    address = models.CharField(max_length=200, null=False)
    phone_number = models.CharField(max_length=12, null=False)

    def __str__(self):
        return self.name


class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    price = models.DecimalField(
        null=False,
        default= 0.00,
        max_digits=15,
        decimal_places=2,
    )
