import fetchWithAuth from "@/fetchWithAuth";
import { getCookie } from "cookies-next";
import "./style.css";

export default async function Dashboard() {
  const id = getCookie("authUserId");
  const dashboard = await fetchWithAuth(`/admin-dashboard`);
  console.log("hello");
  const today_report = await fetchWithAuth("dashboard_today_report");
  return (
    <div className="dashboard-content">
      <div className="dashboard-content__topbar topbar flex-ctr">
        <div className="drawer-open">
          <span className="slice-top"></span>
          <span className="slice-middle"></span>
          <span className="slice-bottom"></span>
        </div>
      </div>
      <div className="dashboard-content__title-bar title-bar">
        <h3 className="title">Dashboard</h3>
      </div>
      <div className="dashboard-main-content-wrap">
        <div className="dashboard-main-content">
        <h1>Overall report</h1>
          <div className="cards dashboard-main-content__cards flex-start-spb">
            <div className="card flex-ctr card-1">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Branch</p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.branch}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-2">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M64 56c0-13.3 10.7-24 24-24s24 10.7 24 24V200v40H80c-5.5 0-10.8 .6-16 1.6V56zm48 216v0h32v0h24c13.2 0 24 10.7 24 24v0c0 13.3-10.7 24-24 24H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c15.7 0 29.8-6.4 40-16.8c10.2 10.4 24.3 16.8 40 16.8c13.8 0 26.4-5 36.1-13.2C294.4 351.7 310.2 360 328 360c8.6 0 16.7-1.9 24-5.4C350.6 424.1 293.8 480 224 480H160C89.3 480 32 422.7 32 352V320c0-26.5 21.5-48 48-48h32zm32-32V200c0-13.3 10.7-24 24-24s24 10.7 24 24v31.9c0 0 0 0 0 .1v13.4c-7.3-3.5-15.4-5.4-24-5.4H144zm0-90.6V56c0-30.9-25.1-56-56-56S32 25.1 32 56V256C12.6 270.6 0 293.8 0 320v32c0 88.4 71.6 160 160 160h64c88.4 0 160-71.6 160-160V304 272 248c0-30.9-25.1-56-56-56c-12.1 0-23.3 3.8-32.5 10.4C285.6 186.5 268 176 248 176c-9.7 0-18.8 2.5-26.7 6.8C214 160.3 192.9 144 168 144c-8.6 0-16.7 1.9-24 5.4zM224 272V232c0-13.2 10.8-24 24-24c13.3 0 24 10.7 24 24v16 48c0 13.3-10.7 24-24 24s-24-10.7-24-24v0l0-24zm128 0v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8V248c0-13.3 10.7-24 24-24s24 10.7 24 24v24z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Counter</p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.counter}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-3">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Staff </p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.staff}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-4">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total User </p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.user}
                </h3>
              </div>
            </div>
          </div>

          <div className="cards dashboard-main-content__cards flex-start-spb">
            <div className="card flex-ctr card-1">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Order </p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.order}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-2">
              <div className="card__icon flex-ctr-ctr">
              <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Amount</p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.totalPayment}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-3">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Brand Amount</p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.brandPayment}
                </h3>
              </div>
            </div>
            <div className="card flex-ctr card-4">
              <div className="card__icon flex-ctr-ctr">
              <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
              </div>
              <div className="card__text">
                <p className="card__text-sub">Total Admin  Percentage  </p>
                <h3 className="card__text-main">
                  {dashboard && dashboard.data.superAdminPayment}
                </h3>
              </div>
            </div>
          </div>

         <h1>Today Report</h1>

    <div className="cards dashboard-main-content__cards flex-start-spb">
        <div className="card flex-ctr card-1">
        <div className="card__icon flex-ctr-ctr">
        <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"/></svg>
        </div>
        <div className="card__text">
        <p className="card__text-sub">Total Order </p>
    <h3 className="card__text-main">
        {today_report && today_report.data.order}
</h3>
    </div>
    </div>
    <div className="card flex-ctr card-2">
        <div className="card__icon flex-ctr-ctr">
        <svg width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#ffffff" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/></svg>
        </div>
        <div className="card__text">
        <p className="card__text-sub">Total Amount</p>
    <h3 className="card__text-main">
        {today_report && today_report.data.totalPayment}
</h3>
    </div>
    </div>
    <div className="card flex-ctr card-3">
        <div className="card__icon flex-ctr-ctr">
        <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"/></svg>
        </div>
        <div className="card__text">
        <p className="card__text-sub">Total Brand Amount</p>
    <h3 className="card__text-main">
        {today_report && today_report.data.brandPayment}
</h3>
    </div>
    </div>
    <div className="card flex-ctr card-4">
        <div className="card__icon flex-ctr-ctr">
        <svg width={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
        </div>
        <div className="card__text">
        <p className="card__text-sub">Total Admin  Percentage  </p>
    <h3 className="card__text-main">
        {today_report && today_report.data.superAdminPayment}
</h3>
    </div>
    </div>
    </div>
          {/* <div className="dashboard-main-content__box">
            <h3 className="dashboard-main-content__box-title">
              Client Statistic
            </h3>
            <div className="dashboard-main-content__box-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                officiis, facilis sint consequuntur natus earum amet placeat
                nesciunt aut dolore necessitatibus nam, quod eligendi animi
                ipsum ratione! Eligendi reprehenderit corporis, at tempore atque
                dolorum quo vero magnam molestiae reiciendis saepe assumenda rem
                voluptatum fuga explicabo veniam. Reiciendis corrupti
                perspiciatis praesentium optio voluptate accusamus recusandae,
                earum, veniam ipsam iste officiis pariatur, nesciunt tempora
                eligendi deleniti saepe? Blanditiis impedit hic in optio!
                Repudiandae vel, repellendus quod molestias porro, qui
                recusandae, consectetur repellat debitis mollitia quam quas?
                Assumenda iste autem, dignissimos facere delectus eaque et
                repellendus in. Vitae saepe deserunt excepturi enim iure.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
