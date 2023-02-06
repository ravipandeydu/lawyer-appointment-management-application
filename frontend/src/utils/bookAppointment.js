import { addAppointment } from "../Redux/appointments/appointments.action";
import {
  bookAppointments,
  getLawyers,
  getLawyersWithoutLoading,
} from "../Redux/lawyers/lawyers.actions";

export function bookAppointment(id, lawyer, user, date, slot, toast, dispatch) {
  const token = localStorage.getItem("token");
  //If date exists in lawyer appointments
  if (lawyer.appointments[date]) {
    dispatch(
      bookAppointments(token, id, {
        ...lawyer,
        appointments: {
          ...lawyer.appointments,
          [date]: [...lawyer.appointments[date], slot],
        },
      })
    ).then(() => {
      toast({
        title: "Appointment Booked",
        description: "You've successfully booked the appointment",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(
        addAppointment(token, {
          userId: user._id,
          lawyerId: lawyer._id,
          date: date,
          time: slot,
        })
      );
      dispatch(getLawyersWithoutLoading(token));
    });
  } else {
    //If date exists in lawyer appointments
    dispatch(
      bookAppointments(token, id, {
        ...lawyer,
        appointments: {
          ...lawyer.appointments,
          [date]: [slot],
        },
      })
    ).then(() => {
      toast({
        title: "Appointment Booked",
        description: "You've successfully booked the appointment",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      dispatch(
        addAppointment(token, {
          userId: user._id,
          lawyerId: lawyer._id,
          date: date,
          time: slot,
        })
      );
      dispatch(getLawyersWithoutLoading(token));
    });
  }
}
