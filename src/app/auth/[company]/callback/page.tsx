"use client";
import { useParams, useSearchParams } from "next/navigation";
import { AUTH_BACKEND_API } from "@/shared/api/http-client";

type Company = "github" | "google" | "telegram";

const AuthCallback = () => {
  const searchParams = useSearchParams();
  const { company } = useParams() as { company: Company };
  const code = searchParams.get("code");
  fetch(`${AUTH_BACKEND_API}/${company}`, {
    method: "post",
    body: JSON.stringify({ code }),
    headers: {
      "Content-Type": "Application/json",
    },
  });
};

export default AuthCallback;
