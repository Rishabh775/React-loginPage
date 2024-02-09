export default function Footer() {
  return (
    <div className="text-black  bg-light-hex  flex gap-6 lg:gap-7 lg:flex-row lg:justify-between px-10 flex-col  lg:px-28 py-10">
      <p className="font-bold text-lg">All Rights Reserved @ 2023</p>
      <div className="flex gap-4 font-bold">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
      </div>
    </div>
  );
}
