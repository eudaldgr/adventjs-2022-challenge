function countHours(year, holidays) {
  let workableHolidays = holidays.filter((holiday) => {
    let dayOfWeek = new Date(`${holiday}/${year}`).getDay();

    return dayOfWeek > 0 && dayOfWeek < 6;
  });

  return workableHolidays.length * 2;
}