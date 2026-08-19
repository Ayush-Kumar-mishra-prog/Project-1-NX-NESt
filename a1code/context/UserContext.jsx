"use client";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../app/lib/axios";

const userContext = createContext();

export const defaultSettings = {
  title: "A1 Code",
  logo: "",
  navColor: "#3b82f6",
  navbarColor: "#1e3a8a",
  navText: "#ffffff",
  footerColor: "#ffffff",
  footerTextColor: "#475569",
  footer: "Ready-made projects for faster launches.",
};

export const normalizeSettings = (settings) => ({
  ...defaultSettings,
  ...(settings || {}),
});

export const getSettingsAssetUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedPath.startsWith("/uploads")) {
    return `${baseUrl}/settings${normalizedPath}`;
  }

  return `${baseUrl}${normalizedPath}`;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [settingsData, setSettingsDataState] = useState(defaultSettings);

  const handleLoad = async () => {
    try {
      const response = await api.get("/auth/api/v1/auth/me");
      setUser(response.data);
    } catch (error) {
      console.error("Failed to load user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await api.get("/settings/api/vi/settings/get-settings");
      setSettingsDataState(normalizeSettings(response.data));
    } catch (error) {
      console.error("Failed to load settings:", error.message);
      setSettingsDataState(defaultSettings);
    }
  };

  useEffect(() => {
    handleLoad();
    fetchSettings();
  }, []);

  useEffect(() => {
    document.title = settingsData.title || defaultSettings.title;
  }, [settingsData.title]);

  const setSettingsData = (settings) => {
    setSettingsDataState(normalizeSettings(settings));
  };

  return (
    <userContext.Provider
      value={{
        user,
        token,
        loading,
        setUser,
        setToken,
        setLoading,
        settingsData,
        setSettingsData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
