"use client";
import { useState, useEffect } from "react";

const BIN_ID = "67caf37ead19ca34f8182327";
const API_KEY = "$2a$10$V6IiqxIXY9TS7O8Ug.41kOkmkIoXoqQt7JKHlAuJALQqvuIC08Yz2";

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const trackVisit = async () => {
      const hasVisited = localStorage.getItem("hasVisited");

      if (!hasVisited) {
        try {
          // Fetch current visit count
          const res = await fetch(
            `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
            {
              headers: { "X-Master-Key": API_KEY },
            }
          );
          const data = await res.json();
          const newVisits = data.record.visits + 1;

          // Update visit count
          await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "X-Master-Key": API_KEY,
            },
            body: JSON.stringify({ visits: newVisits }),
          });

          setVisits(newVisits);
          localStorage.setItem("hasVisited", "true"); // Mark user as counted
        } catch (error) {
          console.error("Error updating visit count:", error);
        }
      } else {
        // Just fetch the current count without increasing it
        const res = await fetch(
          `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`,
          {
            headers: { "X-Master-Key": API_KEY },
          }
        );
        const data = await res.json();
        setVisits(data.record.visits);
      }
    };

    trackVisit();
  }, []);

  return (
    <footer className="text-center p-4 bg-gray-200 text-white py-4 mt-8">
      <p className="text-sm text-gray-700">
        {visits > 0 && `${visits} `}&copy; 2025 Created by Andrii Voitovych
      </p>
    </footer>
  );
}
