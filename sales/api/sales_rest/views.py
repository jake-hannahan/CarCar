from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, SalesPerson, Customer, SaleRecord
from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SaleRecordEncoder,
    AutomobileVOEncoder
)


@require_http_methods(["GET"])
def list_automobileVOs(request):
    automobiles = AutomobileVO.objects.all()
    return JsonResponse({"autos": automobiles}, encoder=AutomobileVOEncoder)


@require_http_methods(["GET", "POST"])
def list_sales_person(request):
    if request.method == 'GET':
        sales_person = SalesPerson.objects.all()
        return JsonResponse({"sales_person": sales_person}, encoder=SalesPersonEncoder)
    else:
        content = json.loads(request.body)

        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def show_sales_person(request, pk):
    if request.method == 'GET':
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False
        )
    elif request.method == 'PUT':
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        sales_person = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        return JsonResponse({"customers": customers}, encoder=CustomerEncoder)
    else:
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def show_customer(request, pk):
    if request.method == 'GET':
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )
    elif request.method == 'PUT':
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer = Customer.objects.get(id=pk)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def list_sales(request):
    if request.method == 'GET':
        sales = SaleRecord.objects.all()
        return JsonResponse({"sales": sales}, encoder=SaleRecordEncoder)
    else:
        content = json.loads(request.body)

        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile href"},
                status=400,
            )

        try:
            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales_person id"},
                status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )


        sales_record = SaleRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SaleRecordEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def show_sale(request, pk):
    if request.method == 'GET':
        sale = SaleRecord.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False
        )
    elif request.method == 'PUT':
        content = json.loads(request.body)

        try:
            if "automobile" in content:
                automobile = AutomobileVO.objects.get(import_href=content["automobile"])
                content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile href"},
                status=400,
            )

        try:
            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid sales_person id"},
                status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )

        SaleRecord.objects.filter(id=pk).update(**content)
        sale = SaleRecord.objects.get(id=pk)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False,
        )
    else:
        count, _ = SaleRecord.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
