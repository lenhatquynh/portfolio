"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ id: string }> = ({ id }) => {

  useEffect(() => {
    
    fetch("/api/counter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

  }, [id]);

  return null;
};

