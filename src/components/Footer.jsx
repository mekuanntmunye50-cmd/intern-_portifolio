export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-navy-950">
      <div className="container-custom px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {year} Mekuannt Munye. All right reserved !
      </div>
    </footer>
  );
}
