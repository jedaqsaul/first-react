import React from "react";
import "./login.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Login() {
  return (
    <div className="login-section">
      <form>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          required
        />
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          required
        />
        <button>
          Next <ArrowRightIcon className="h-5 w-5 text-blue-500" />
        </button>
      </form>
    </div>
  );
}
