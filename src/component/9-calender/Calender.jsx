import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {  Typography } from "@mui/material/";
import "./calender.css";
import Paper from "@mui/material/Paper";

export default function Calender() {
  function renderEventContent(eventInfo) {
    return (
      <>
        <p>{eventInfo.timeText}</p>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <p>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <i>{event.title}</i>
      </li>
    );
  }

  const [weekendsVisible] = useState(true);
  const [currentEvents, setcurrentEvents] = useState([]);

  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {

    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setcurrentEvents(events);
  };

  
  const INITIAL_EVENTS = [];

  return (
   
   
   
   
   <Stack direction="row">
      <Paper className="demo-app-sidebar">
     
      <Typography style={{ textAlign: "center", margin: "20px" }}>
          All Events ({currentEvents.length})
        </Typography>
        <ul >{currentEvents.map(renderSidebarEvent)}</ul>
    
      </Paper>

      <Box className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </Box>
    </Stack>
  );
}
