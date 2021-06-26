// this is woriking solution but may be computationaly expensive thereforre working on alternate
<div className='min-h-screen w-full flex-grow-0 overflow-x-hidden'>
  <Navbar open={open} setOpen={setOpen} />
  <div
    className='w-full z-50'
    style={
      open
        ? {
            left: "0",
            position: "absolute",
            transform: "translateX(180px)",
            top: "3.5rem",
            bottom: "0",
          }
        : {
            left: "0",
            position: "absolute",
            transform: "translateX(0px)",
            top: "3.5rem",
            bottom: "0",
          }
    }>
    {/* <div className='absolute inset-0'> */}
    {props.children}
    {/* </div> */}
  </div>
</div>;

// Found the alternate solution to above computationaly expensive solution
<div className='min-h-screen w-full flex-grow-0 overflow-x-hidden'>
  <Navbar open={open} setOpen={setOpen} />
  <div
    className='w-full z-50 absolute'
    style={open ? { transform: "translateX(180px)" } : { transform: "translateX(0px)" }}>
    {props.children}
  </div>
</div>;
// ==================================================================
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'my-grey-blue':'#14253d',
        'my-grey-blue-hover':'#14256C',
        'my-dark-blue':'#002b49',
        'my-opt-3':'#2a2e35'
      },
      spacing:{
        120:'30rem',
        140:'35rem',
      },
      zIndex:{
        '-10':'-10',
        '-1':'-1',
        '-2':'-2'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive','hover'],
    },
  },
  plugins: [],
}
