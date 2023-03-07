from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import AutomobileVO, Technician, ServiceAppointment
from .encoders import AutomobileVOEncoder, TechnicianEncoder, ServiceAppointmentEncoder


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create a technician"},
                status=400,
            )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_technician(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = Technician.objects.filter(id=id.delete())
        return JsonResponse({"deleted": count > 0})
    else:
        try:
            content = json.loads(request.body)
            Technician.objects.filter(id=id).update(**content)
            return JsonResponse(
                Technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create a technician"},
                status=400,
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request, vin=None):
    if request.method == "GET":
        if vin is not None:
            appointments = ServiceAppointment.objects.filter(vin=vin)
        else:
            appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=404,
            )
        if AutomobileVO.objects.filter(vin=content["vin"]).exists():
            content["vip"] = True
        appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request, id):
    if request.method == "GET":
        appointment = ServiceAppointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = ServiceAppointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        if "technician" in content:
            try:
                technician_id = content["technician"]
                technician = Technician.objects.get(id=technician_id)
                content["technicians"] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {"message": "Invalid technician id"},
                    status=404,
                )
        ServiceAppointment.objects.filter(id=id).update(**content)
        appointment = ServiceAppointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )
