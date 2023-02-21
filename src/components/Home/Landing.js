import React from "react";
import { BiDownArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Backdrop, Stack } from "@mui/material";
import QRCode from "react-qr-code";
// import Snackbar from "@mui/material/Snackbar";
// import IconButton from "@mui/material/IconButton";

export const Landing = () => {
  // const [open, setOpen] = React.useState(true);
  const [model, setModel] = React.useState(false);

  // const handleClose = (
  //   event: React.SyntheticEvent | Event,
  //   reason?: string
  // ) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //   </React.Fragment>
  // );

  const closeModel = () => {
    setModel(false);
  };
  const modelToggle = () => {
    setModel(!model);
  };

  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div>
        <div className="secondary-font text-5xl w-1/2 text-center mx-auto pt-44 uppercase relative">
          Playing a game, having a fun
        </div>

        <div className="mt-8 text-sm w-1/2 text-center mx-auto text-gray-500">
          {/* Atomize React is a UI framework that helps developers collaborate with
          designers and build consistent user interfaces effortlessly. */}
          Yaariscore is offering a free tool to play games on your web browser
          without downloading it into your device.
        </div>
        <div className="flex items-center mx-auto my-auto w-3/12 justify-between mt-12">
          <div
            onClick={() => navigate("/store")}
            className="capitalize flex items-center bg-[#0284FE] py-2 px-6 cursor-pointer hover:bg-sky-500 text-white rounded-md text-sm w-42"
          >
            play games
          </div>
          <div
            onClick={modelToggle}
            className="capitalize flex items-center border border-gray-300 py-2 px-6 text-sm rounded-md w-42 cursor-pointer hover:bg-gray-700"
          >
            <BiDownArrowAlt className="mr-1 h-4 w-4" /> download
          </div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={model}
            onClick={closeModel}
          >
            <Stack>
              <div class="flex items-center justify-center h-screen">
                <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                  <h1 class="text-lg text-gray-700"> Scan QR Code </h1>
                  <h3 class="text-sm text-gray-400 ">
                    Scan this QR to download the game
                  </h3>
                  <div className="border items-center justify-center m-auto mt-4 mb-4 border-gray-400 rounded-xl p-2 w-fit h-fit">
                    <QRCode
                      size={256}
                      style={{
                        height: "120px",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value="Hello  World!"
                      viewBox={`0 0 256 256`}
                    />  
                  </div>
                  <input class="text-xs border-2 border-gray-300 rounded-sm px-2 text-gray-400 mt-4" value="https://www.google.com/search"/>
                  <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
                    Copy Link
                  </button>
                </div>
              </div>
            </Stack>
          </Backdrop>
        </div>
      </div>
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        message="site is under maintenance"
        action={action}
      /> */}
    </div>
  );
};
