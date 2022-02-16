import logo from "./logo.svg"
import doctor1 from "./img/doctor1.jpg"
import doctor2 from "./img/doctor2.jpg"
import doctor3 from "./img/doctor3.jpg"
import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Avatar from "@mui/material/Avatar"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="appointments" element={<Appointments />} />
            <Route
              path="appointments/diabetes-treatment"
              element={<DiabetesTreatment />}
            />
            <Route
              path="appointments/hypertension-treatment"
              element={<HypertensionTreatment />}
            />
            <Route path="events" element={<Events />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="clients" element={<Clients />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

function Home() {
  return (
    <>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="appointments">
          Appointments
        </Link>
        <Link className="nav-link" to="events">
          Events
        </Link>
        <Link className="nav-link" to="doctors">
          Doctors
        </Link>
        <Link className="nav-link" to="clients">
          Clients
        </Link>
      </nav>
      <h1>Healthcare</h1>
    </>
  )
}

function Appointments() {
  return (
    <>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="appointments">
          Appointments
        </Link>
      </nav>
      <h2>Appointments</h2>
      <Link
        className="list-group-item list-group-item-action"
        to="diabetes-treatment"
      >
        Diabetes treatment
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        to="hypertension-treatment"
      >
        Hypertension treatment
      </Link>
    </>
  )
}

function Events() {
  return (
    <>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="events">
          Events
        </Link>
      </nav>
      <h2>Events</h2>
      <div class="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          "COVID-19 & Mental Health: Response and Management"
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Jan 7 2022 : InnovatorMD Global Summit 2022
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Jan 27 2022 : EAACI Winter School Hybrid 2022 on Basic & Clinical
          Immunology
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Jan 30 2022 : National Association of EMS Physicians 2022 Annual
          Meeting
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Feb 14 2022 : 1st International Meeting "Intermediate Respiratory Care
          Unit"
        </a>
      </div>
    </>
  )
}

function Doctors() {
  return (
    <>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="doctors">
          Doctors
        </Link>
      </nav>
      <h2>Doctors</h2>
      <Stack spacing={2}>
        <Item>
          <Avatar
            style={{ alignItems: "center" }}
            alt="Remy Sharp"
            src={doctor1}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Remy Sharp</h3>
        </Item>

        <Item>
          <Avatar
            alt="Travis Howard"
            src={doctor2}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Travis Howard</h3>
        </Item>

        <Item>
          <Avatar
            alt="Cindy Baker"
            src={doctor3}
            sx={{ width: 100, height: 100 }}
          />
          <h3>Cindy Baker</h3>
        </Item>
      </Stack>
    </>
  )
}

function Clients() {
  return (
    <>
      <nav className="nav nav-pills nav-justified">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link active" to="clients">
          Clients
        </Link>
      </nav>
      <h1>Clients</h1>
      <ul class="list-group">
        <li class="list-group-item">Patient #1</li>
        <li class="list-group-item">Patient #2</li>
        <li class="list-group-item">Patient #3</li>
        <li class="list-group-item">Patient #4</li>
        <li class="list-group-item">Patient #5</li>
        <li class="list-group-item">Patient #6</li>
        <li class="list-group-item">Patient #7</li>
      </ul>
    </>
  )
}

function DiabetesTreatment() {
  return (
    <>
      <h2>
        Rp: Insulini lispri biphasici 100 ME - 10 ml <br />
        D.t.d: №2 in amp. <br />
        S: п/к, 2 р/д
      </h2>
    </>
  )
}

function HypertensionTreatment() {
  return (
    <>
      <h2>
        Rp.: Tab. Bisoprololi 0,01 <br />
        D.t.d. №30 <br />
        S.: По 1/2 таб. 1 раз в день.
      </h2>
    </>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

export default App
