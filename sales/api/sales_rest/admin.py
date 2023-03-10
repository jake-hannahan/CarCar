from django.contrib import admin
from .models import AutomobileVO, SalesPerson, Customer, SaleRecord


@admin.register(AutomobileVO)
class RecipeAdmin(admin.ModelAdmin):
    list_display = (
        "import_href",
        "vin",
        "id",
    )


@admin.register(SalesPerson)
class RecipeAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "employee_number",
        "id",
    )


@admin.register(Customer)
class RecipeAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "address",
        "phone_number",
        "id",
    )


@admin.register(SaleRecord)
class RecipeAdmin(admin.ModelAdmin):
    list_display = (
        "automobile",
        "sales_person",
        "customer",
        "price",
    )
