import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Image from "next/image";
import profilepiclogo from "public/assets/profilepic.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Fake user data for frontend
  const username = "bharath";
  const club = "Tech Club";

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  const gradientStyle = {
    backgroundImage: "linear-gradient(to bottom, #5268DA, #495CC3,#2F3349)",
  };

  return (
    <div className="relative">
      <div className="absolute left-2 md:left-10 bottom-10 md:bottom-3">
        <IconButton onClick={toggleDrawer}>
          {open ? <CloseIcon /> : <MenuIcon className="text-white text-4xl" />}
        </IconButton>
      </div>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <div className="flex w-screen h-screen md:w-96 flex-col" style={gradientStyle}>
          <div className="bg-[#5268DA] flex justify-end p-3">
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>

          <List className="mt-10 flex flex-col justify-center items-center gap-5 px-10">
            <div className="w-20 h-20">
              <Image src={profilepiclogo} alt="profile" />
            </div>

            <div className="mb-80 md:mb-96 flex flex-col gap-8">
              <div className="w-48 text-white text-2xl font-mont text-center">
                {username}
              </div>
              <div className="w-48 text-white text-2xl font-mont text-center">
                {club}
              </div>
            </div>

            <Link
              href="/"
              onClick={closeDrawer}
              className="mb-10 mr-20 flex flex-row items-center gap-8"
            >
              <ExitToAppIcon className="ml-14 text-white text-4xl" />
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    style={{ fontSize: "28px", fontFamily: "var(--font-mont)" }}
                  >
                    Logout
                  </Typography>
                }
                className="text-white"
              />
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
