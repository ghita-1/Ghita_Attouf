import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Function to draw a star shape
    const drawStar = (ctx, x, y, radius, opacity) => {
      const spikes = 5;
      const outerRadius = radius;
      const innerRadius = radius * 0.4;

      let rot = Math.PI / 2 * 3;
      let step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(x, y - outerRadius);

      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(
          x + Math.cos(rot) * outerRadius,
          y + Math.sin(rot) * outerRadius
        );
        rot += step;

        ctx.lineTo(
          x + Math.cos(rot) * innerRadius,
          y + Math.sin(rot) * innerRadius
        );
        rot += step;
      }
      
      ctx.lineTo(x, y - outerRadius);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
    };

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor((window.innerWidth * window.innerHeight) / 6000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections first
      particles.forEach((particle, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            const opacity = distance < 80 
              ? 0.25
              : 0.15 * (1 - (distance - 80) / 80);
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = distance < 80 ? 0.6 : 0.4;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });

      // Draw stars on top of connections
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update pulse
        particle.pulse += particle.pulseSpeed;
        const pulseFactor = Math.sin(particle.pulse) * 0.2 + 1;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw star with glow
        ctx.save();
        
        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 4
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * pulseFactor * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw star
        drawStar(
          ctx,
          particle.x,
          particle.y,
          particle.radius * 2,
          particle.opacity * pulseFactor
        );

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      initParticles();
    };

    // Initialize
    setCanvasSize();
    initParticles();
    animate();

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
};

export default AnimatedBackground; 