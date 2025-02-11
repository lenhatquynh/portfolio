export default function BrandNameStyle2() {
  const words = "Quynh Le".split("");
  return (
    <div>
      <h1 className="z-10 font-extrabold text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
        {words.map((w, widx) => {
          const extra = widx ? widx * 0.4 : 0;
          const duration = 3 + extra + "s";

          return (
            <span
              className="animate-title"
              style={{ animationDuration: duration }}
              key={w}
            >
              {w}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
