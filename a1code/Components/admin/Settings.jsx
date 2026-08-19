"use client";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import api from "../../app/lib/axios";
import { useUserContext } from "../../context/UserContext";
import { useEffect } from "react";

const Settings = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { settingsData, setSettingsData } = useUserContext();

  // Populate form with current settings
  useEffect(() => {
    if (settingsData) {
      setValue("title", settingsData.title || "");
      setValue("navColor", settingsData.navColor || "#0000ff");
      setValue("navbarColor", settingsData.navbarColor || "#0000ff");
      setValue("navText", settingsData.navText || "#ffffff");
      setValue("footerColor", settingsData.footerColor || "#0000ff");
      setValue("footerTextColor", settingsData.footerTextColor || "#0000ff");
      setValue("footer", settingsData.footer || "");
    }
  }, [settingsData, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("navColor", data.navColor);
    formData.append("navbarColor", data.navbarColor);
    formData.append("navText", data.navText);
    formData.append("footerColor", data.footerColor);
    formData.append("footerTextColor", data.footerTextColor);
    formData.append("footer", data.footer);
    if (data.logo?.[0]) {
      formData.append("logo", data.logo[0]);
    }
    try {
      const { data: response } = await api.post(
        "/settings/api/vi/settings/settings-save",
        formData,
      );
      setSettingsData(response.updatedSettings);
      alert("Settings updated successfully!");
    } catch (error) {
      console.log(error.message);
      alert("Error updating settings!");
    }
  };

  return (
    <>
      <div className="space-y-4  lg:w-1/2 sm:w-full ">
        <div className="flex flex-col gap-3    sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-4xl p-4 font-bold text-slate-900">
                Settings
              </h1>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" gap-3   bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4 md:mb-8 text-sm">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Website Title</label>
              <input
                type="text"
                className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
                {...register("title")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload logo</label>
              <input
                type="file"
                placeholder="Upload logo"
                className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
                {...register("logo")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4 md:mb-8 text-sm">
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">
                {" "}
                Update Top logo navbar color
              </label>
              <input
                type="color"
                className="rounded-full"
                {...register("navColor")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload Navbar color</label>
              <input
                type="color"
                className="rounded-full"
                {...register("navbarColor")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700"> Update Navbar text color</label>
              <input
                type="color"
                className="rounded-full"
                {...register("navText")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700">Upload footer color</label>
              <input
                type="color"
                className="rounded-full"
                {...register("footerColor")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-zinc-700"> Update footer text color</label>
              <input
                type="color"
                className="rounded-full"
                {...register("footerTextColor")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 md:mb-8 text-sm">
            <label className="text-zinc-700">Website Footer</label>
            <input
              type="text"
              className="px-4 py-3 rounded-lg border border-zinc-200 bg-white placeholder:text-zinc-500 text-zinc-900 focus:outline-none focus:border-zinc-300 transition-colors"
              {...register("footer")}
            />
          </div>

          <Button type="submit" variant="contained">
            Save Data
          </Button>
        </form>
      </div>
    </>
  );
};

export default Settings;
