import calendar

c = calendar.TextCalendar(calendar.SUNDAY)
year = int(input("Plz input enter the year number"))
month = int(input("Plz input enter the month number"))

print(calendar.month(year,month))
