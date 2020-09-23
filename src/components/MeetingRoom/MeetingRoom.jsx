import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import DailyIframe from "@daily-co/daily-js";

const EVENT_JOINING_MEETING = "joining-meeting";
const EVENT_JOINED_MEETING = "joined-meeting";
const EVENT_LEFT_MEETING = "left-meeting";

const EVENT_PARTICIPANT_JOINED = "participant-joined";
const EVENT_PARTICIPANT_UPDATED = "participant-updated";
const EVENT_PARTICIPANT_LEFT = "participant-left";

const ParticipantComp = (props) => {
  const { user_id, audio, video, audioTrack, videoTrack, local } = props;
  const audioRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (audio && audioRef && audioRef.current) {
      audioRef.current.srcObject = new MediaStream([audioTrack]);
    }
    if (video && videoRef && videoRef.current) {
      videoRef.current.srcObject = new MediaStream([videoTrack]);
    }
  }, [videoTrack, audioTrack]);
  return (
    <div>
      {audio && !local && <audio autoPlay ref={audioRef} />}
      {video && <video autoPlay muted ref={videoRef} />}
      <p style={{ fontWeight: local ? "bold" : "normal" }}>{user_id}</p>
    </div>
  );
};

const MeetingRoom = (props) => {
  let { name } = useParams();
  const [room, setRoom] = useState(null);
  useEffect(() => {
    fetch("https://api.daily.co/v1/rooms/" + name, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer" +
          " " +
          "642ad4f79aa255a6b5f921b1a02cde414aab957be401d174c3c558ff5a7e522f",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setRoom(result);
        },
        (error) => {
          alert("error");
        }
      );
  }, []);

  const [meetingStatus, setMeetingStatus] = useState(null);
  const [callObject, setCallObject] = useState(DailyIframe.createCallObject());
  const [participants, setParticipants] = useState([]);
  useEffect(() => {
    if (room) {
      callObject.join({ url: room.url });
    }
  }, [room]);

  useEffect(() => {
    if (room) {
      console.log("binding ", participants);
      const handleCallObjectEvents = (e) => {
        console.log(e, participants);
        setMeetingStatus(e.action);
        switch (e.action) {
          case EVENT_JOINED_MEETING:
            setParticipants(
              Object.keys(e.participants).map((k) => {
                let tp = e.participants[k];
                return tp;
              })
            );
            break;

          case EVENT_PARTICIPANT_JOINED:
            setParticipants([...participants, e.participant]);
            break;
          case EVENT_PARTICIPANT_UPDATED:
            setParticipants(
              participants.map((p) => {
                if (p.user_id == e.participant.user_id) return e.participant;
                else return p;
              })
            );
            break;
          case EVENT_PARTICIPANT_LEFT:
            setParticipants(
              participants.filter((p) => {
                if (p.user_id == e.participant.user_id) return false;
                else return true;
              })
            );
            break;
        }
      };
      let events = [
        EVENT_JOINING_MEETING,
        EVENT_JOINED_MEETING,
        EVENT_LEFT_MEETING,
        EVENT_PARTICIPANT_JOINED,
        EVENT_PARTICIPANT_LEFT,
        EVENT_PARTICIPANT_UPDATED,
      ];
      for (let _e of events) {
        callObject.on(_e, handleCallObjectEvents);
      }

      return function () {
        console.log("unbinding");
        for (let _e of events) {
          callObject.off(_e, handleCallObjectEvents);
        }
      };
    }
  }, [room, participants]);
  const toggleMic = () => {
      callObject.setLocalAudio(!callObject.localAudio())
  };
  const toggleVideo = () => {
      callObject.setLocalVideo(!callObject.localVideo())
  };

  return (
    <div className="container justify-content-center">
      <div className="row my-5">
        <div className="col-sm-5">
          {room ? (
            <>
              <p>{room.name}</p>
              <p>{room.url}</p>
              <button onClick={toggleMic}>Toggle Mic</button>
              <button onClick={toggleVideo}>Toggle Video</button>
              {meetingStatus && <p>{meetingStatus}</p>}
              <ul>
                {participants.map((p) => {
                  return (
                    <li key={p.user_id}>
                      {/* <ParticpantC */}
                      <ParticipantComp {...p} />
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p>Please wait, loading information</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default MeetingRoom;
