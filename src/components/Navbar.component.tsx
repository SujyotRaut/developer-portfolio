function Navbar() {
  return (
    <div className='flex items-center justify-between px-8 h-16'>
      <span>Logo</span>
      <span className='flex gap-4'>
        <span>Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </span>
    </div>
  );
}

export default Navbar;
