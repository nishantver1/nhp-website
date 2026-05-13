"use client";

import React, { useState, useEffect, useCallback } from "react";
import DoctorAvailabilityCalendar from "./DoctorAvailabilityCalendar";
import { FaSync } from "react-icons/fa";

// Replace this with your actual Google Sheet ID
const SHEET_ID = "18oGO4lVdxDPT58y4HMnQoECqua3ENHHoHLTmlOLJMVA";
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`;

interface SheetRow {
  Date?: string;
  Status?: string;
}

const LiveDoctorAvailabilityCalendar = () => {
  const [unavailableDates, setUnavailableDates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAvailability = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(SHEET_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data from Google Sheets");
      }
      const data: SheetRow[] = await response.json();

      // Extract dates where status is "unavailable" (case-insensitive)
      const dates = data
        .filter((row) => row.Status?.toLowerCase() === "unavailable" && row.Date)
        .map((row) => row.Date as string);

      setUnavailableDates(dates);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching availability.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Only try to fetch if a real sheet ID is provided to avoid unnecessary errors
    fetchAvailability();
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-end max-w-5xl mx-auto px-6 -mb-10 relative z-10">
        <button
          onClick={fetchAvailability}
          disabled={isLoading || SHEET_ID === "18oGO4lVdxDPT58y4HMnQoECqua3ENHHoHLTmlOLJMVA"}
          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm border border-blue-100"
        >
          <FaSync className={isLoading ? "animate-spin" : ""} />
          {isLoading ? "Syncing..." : "Refresh Status"}
        </button>
      </div>

      {error && (
        <div className="max-w-5xl mx-auto px-6 mt-12 -mb-7.5">
          <div className="bg-red-50 text-red-800 p-4 rounded-lg border border-red-200 text-sm">
            {error}
          </div>
        </div>
      )}

      <DoctorAvailabilityCalendar unavailableDates={unavailableDates} />
    </div>
  );
};

export default LiveDoctorAvailabilityCalendar;
