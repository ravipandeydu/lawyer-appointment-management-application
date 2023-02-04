import { addAppointment } from "../Redux/appointments/appointments.action";
import { bookAppointments, getLawyers } from "../Redux/lawyers/lawyers.actions";

export function bookAppointment(id, lawyer, user, date, slot, toast, dispatch) {
  const token = localStorage.getItem("token");
  console.log("Clicked");
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
      dispatch(getLawyers(token));
    });
  } else {
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
      dispatch(getLawyers(token));
    });
  }
}
