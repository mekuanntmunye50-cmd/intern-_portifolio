export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div className="text-center mb-12 md:mb-16" id={id}>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
    </div>
  );
}
