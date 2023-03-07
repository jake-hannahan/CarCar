from django.urls import path
from .views import list_sales, show_sale, list_sales_person, show_sales_person, list_customers, show_customer, list_automobileVOs, update_automobileVOs_Sold

urlpatterns = [
    path("sales-records/", list_sales, name="list_sales"),
    path("sales-records/<int:pk>/", show_sale, name="show_sale"),
    path("sales-person/", list_sales_person, name="list_sales_person"),
    path("sales-person/<int:pk>/", show_sales_person, name="show_sales_person"),
    path("customers/", list_customers, name="list_customers"),
    path("customers/<int:pk>/", show_customer, name="show_customer"),
    path("autos/", list_automobileVOs, name="list_autos"),
    path("autos/<str:href>/", update_automobileVOs_Sold, name="update_automobile")
]
