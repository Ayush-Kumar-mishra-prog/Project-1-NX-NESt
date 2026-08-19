"use client";

import { defaultSettings, useUserContext } from "@/context/UserContext";

const AppFooter = () => {
  const { settingsData = defaultSettings } = useUserContext();

  return (
    <footer
      className="border-t border-slate-200"
      style={{ backgroundColor: settingsData.footerColor }}
    >
      <div
        className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
        style={{ color: settingsData.footerTextColor }}
      >
        <p>Copyright © 2026 {settingsData.title}. All rights reserved.</p>
        <p className="font-semibold">{settingsData.footer}</p>
      </div>
    </footer>
  );
};

export default AppFooter;
