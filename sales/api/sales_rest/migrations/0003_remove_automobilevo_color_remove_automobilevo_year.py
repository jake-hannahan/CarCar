# Generated by Django 4.0.3 on 2023-03-07 14:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_salerecord_price_salesperson_employee_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
    ]