import Button from "./Button"


function Navbar(){


return(
    <>
    <div style={{border:'3px solid black', height: '65px', borderRadius:'10px',
        backgroundColor:'black'
    }}>
       <Button/>
 <img style={{width:'40px',
     marginTop:'-40px',
     marginLeft:'20px'
 }} src="data:image/png;base64,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" alt="" />


  <img style={{width:'30px',
       marginTop:'-34px',
     marginLeft:'500px'
    
  }} src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-white-icon.png" alt="" />


  <img style={{width:'20px',
     marginTop:'-22px',
     marginLeft:'1270px'
  }}
   src="https://images.icon-icons.com/3641/PNG/512/download_white_button_icon_227821.png" alt="" />
    <h6 style={{color:'white',
     marginTop:'-21px',
     marginLeft:'1300px',
   fontSize:'12px',
   fontWeight:'bold'
    }}>Install App</h6>

    <img style={{
        marginTop:'-21px',
     marginLeft:'1390px',
     width:'30px'



    }} src="https://i.pinimg.com/474x/98/31/a8/9831a87a7f2d3ca32e64a15b1f20cbcf.jpg" alt="" />

    <img style={{
   marginTop:'-23px',
     marginLeft:'1450px',
     width:'20px'
     

    }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-c3FLObTJ2q2zp7dAhQiMwtoPR0GC9BJ9BtdLd7Lqg&s=10" alt="" />

<img style={{
   marginTop:'-23px',
     marginLeft:'1490px',
     width:'20px',
     borderRadius:'20px'
}}
 src="https://us.123rf.com/450wm/stringerphotography/stringerphotography1511/stringerphotography151101349/47536001-a-white-icon-isolated-on-a-purple-background-s.jpg" alt="" />

    </div>

</>



)



}
export default Navbar