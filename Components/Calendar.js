import { Calendar } from "antd";

function onPanelChange(value, mode) {
  console.log(value, mode);
}
const CalendarComp = () => <Calendar onPanelChange={onPanelChange} />;
export default CalendarComp;
