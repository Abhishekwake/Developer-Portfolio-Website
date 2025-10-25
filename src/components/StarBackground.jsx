import Particles from "react-tsparticles";

export default function StarBackground() {
  return (
    <Particles
      options={{
        background: { color: "#000" },  // black background
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // particles move away on hover
            onClick: { enable: true, mode: "push" }     // click to add more particles
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 }
          }
        },
        particles: {
          color: { value: "#fff" },
          links: { enable: false },
          collisions: { enable: false },
          move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
          number: { value: 150, density: { enable: true, area: 800 } },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
    />
  );
}
