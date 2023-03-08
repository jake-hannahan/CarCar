# Generated by Django 4.0.3 on 2023-03-08 15:24

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0007_remove_salerecord_price_currency_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salerecord',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=15, null=True, validators=[django.core.validators.MinValueValidator(limit_value='0.01')]),
        ),
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.CharField(default='unassigned', max_length=100, unique=True),
        ),
    ]