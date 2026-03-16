import PropTypes from "prop-types";
import React from "react";

export default function Alert({ name, description, type, onClick }) {
  if (type === "success") {
    return (
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{
            color: "#48A111",
            margin: 0,
            fontSize: "32px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {name}
        </h3>

        <p style={{ fontSize: "18px", marginTop: "8px", color: "#555" }}>
          {description}
        </p>

        <button
          onClick={onClick}
          style={{
            marginTop: "12px",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#48A111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Ok
        </button>
      </div>
    );
  } else if (type === "fail") {
    return (
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{
            color: "#EB4C4C",
            margin: 0,
            fontSize: "32px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {name}
        </h3>

        <p style={{ fontSize: "18px", marginTop: "8px", color: "#555" }}>
          {description}
        </p>

        <button
          onClick={onClick}
          style={{
            marginTop: "12px",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#EB4C4C",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </div>
    );
  } else {
    return (
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
          maxWidth: "400px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <h3
          style={{
            color: "#FFD400",
            margin: 0,
            fontSize: "32px",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          {name}
        </h3>

        <p style={{ fontSize: "18px", marginTop: "8px", color: "#555" }}>
          {description}
        </p>

        <button
          onClick={onClick}
          style={{
            marginTop: "12px",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "none",
            background: "#FFD400",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          OK
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  /** The name of the alert */
  name: PropTypes.string.isRequired,
  /** Type of alert, it will change the color of the alert component  */
  type: PropTypes.oneOf(["success", "fail", "warning"]).isRequired,
  /** The description of alert */
  description: PropTypes.string.isRequired,
  /** Action when the CTA button alert is clicked  */
  onClick: PropTypes.func.isRequired,
};
