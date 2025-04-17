import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({
  label,
  date,
  setDate,
}: {
  label: string;
  date: Date;
  setDate: (date: Date) => void;
}) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(dateObject) => {
          if (dateObject) setDate(new Date(dateObject.valueOf()));
        }}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
