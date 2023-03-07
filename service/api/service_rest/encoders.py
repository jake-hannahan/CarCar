from common.json import ModelEncoder
from .models import AutomobileVO, Technician, ServiceAppointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "import_href"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id"
    ]


class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "customer_name",
        "date",
        "technician",
        "reason",
        "vip",
        "completed"
    ]
    encoders = {
        "technician": TechnicianEncoder()
    }
