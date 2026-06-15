import { ImageResponse } from "next/og";

export const alt = "Fonia Labs — Where Ideas Become Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #0b1120 0%, #070b16 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 999,
              border: "7px solid #475569",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "radial-gradient(circle at 50% 40%, rgba(56,189,248,0.35), transparent 70%)"
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 999,
                background: "linear-gradient(135deg, #38bdf8, #1d4ed8)"
              }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
            <div style={{ display: "flex", fontSize: 56, fontWeight: 700, letterSpacing: -2 }}>
              <span style={{ color: "#f8fafc" }}>Fon</span>
              <span style={{ color: "#38bdf8" }}>ia</span>
            </div>
            <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 10, color: "#94a3b8" }}>LABS</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 56 }}>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            Where Ideas Become
          </div>
          <div style={{ fontSize: 82, fontWeight: 700, letterSpacing: -3, color: "#38bdf8", lineHeight: 1.05 }}>
            Companies.
          </div>
        </div>

        <div style={{ fontSize: 30, fontWeight: 500, color: "#94a3b8", marginTop: 40 }}>
          A global innovation group building companies, platforms, and products.
        </div>
      </div>
    ),
    { ...size }
  );
}
