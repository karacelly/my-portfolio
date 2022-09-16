import { useState, useRef, useEffect } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default function Background({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          THREE,
          el: vantaRef.current,
          color: 0x000000,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef}>{children}</div>;
}
