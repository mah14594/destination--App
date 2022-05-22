import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
export default function NotFound() {
  return (
    <div className="col-12 text-center">
      Error404: Page Not Found!{" "}
      <span className="col-12 text-center">
        <Link to="/" exact>
          Go to destinations Page
        </Link>
      </span>
    </div>
  );
}
