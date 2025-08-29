import React from "react";

export default function Capa() {
    return (
        <div
            style={{
                width: "180px",
                height: "86%",
                background: "linear-gradient(135deg, #bfa46a 60%, #f8ecd4 100%)",
                borderRadius: "18px 0 0 18px",
                boxShadow: "0 0 24px 0 rgba(0,0,0,0.10), 0 0 0 2px #e6d3b3 inset",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Georgia, serif",
                color: "#7c5c2a",
                marginRight: "1.5%",
                position: "relative"
            }}
        >
            <h1 style={{ fontSize: "1.5em", textAlign: "center" }}>Livro Aberto</h1>
            <h2 style={{ fontSize: "1em", textAlign: "center", color: "#a88c5f" }}>Capa</h2>
        </div>
    );
}
