# Generated by Django 4.0.3 on 2023-03-06 21:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=100, unique=True)),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('employee_number', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, null=True)),
                ('customer_name', models.CharField(max_length=100)),
                ('date', models.DateTimeField()),
                ('reason', models.CharField(max_length=200)),
                ('vip', models.BooleanField(default=False)),
                ('completed', models.BooleanField(default=False)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='technician', to='service_rest.technician')),
            ],
        ),
    ]
