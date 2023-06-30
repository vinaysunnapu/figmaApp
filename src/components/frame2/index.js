import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  Divider  from '@mui/material/Divider';
import Button from '@mui/material/Button';


const data = {
    "user": {
        "id": "06162299-8a85-4646-ac58-53d671139618",
        "first_name": "vaibhav",
        "last_name": "bandal",
        "email": "mailto:email3@yopmail.com",
        "mobile_number": "1234567890",
        "verified": true,
        "image": "http://stcfileupload.mobilefirsthq.com/uploads/649ad319bb42b_cctv.png",
        "organizationAdmin": 'true'
    },
    "organization": {
        "id": "16ee5fc1-f07d-4d36-9525-5bbaf81caa01",
        "name": "Hello",
        "num_of_employee": 343,
        "active": true,
        "createdAt": "2023-06-05T11:11:14.607Z",
        "yearFounded": 2323,
        "about": "",
        "marketSegment": "Regional"
    },
    "organizationCategory": [
        {
            "name": "Audio Playback",
            "icon": "https://cdn-icons-png.flaticon.com/512/7088/7088436.png"
        },
        {
            "name": "CG",
            "icon": "https://cdn-icons-png.flaticon.com/512/7088/7088436.png"
        }
    ],
    "organizationRole": {
        "name": "Reseller",
        "sub_role_first": 'null',
        "userType": "vendor"
    },
    "organizationAddress": {
        "address_line_1": "",
        "address_line_2": "",
        "city": "",
        "country": "",
        "state": ""
    }
}
const sports = 'https://res.cloudinary.com/dcauubpq9/image/upload/v1688120488/download-removebg-preview_1_1_yuvdbp.png'

// console.log(data.user)

const Frame = () =>{
    return (
        <Box sx={{display:'flex'}}>
        <Box sx={{border:'1px solid #C4C4C4',width:'256px',height:'256px',borderRadius:'50%', display:'flex',justifyContent:'center',alignItems:'center',mr:3 }}>
        <img alt="sports" src={sports} style={{width:'219px',height:'164px'}}/>
        </Box>
        <Box sx={{backgroundColor: '#ffffff',border: '1px solid #C4C4C4',borderRadius:'12px',display:'flex',p:3,width:'620px'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
              <Typography variant="h1" gutterBottom sx={{fontFamily:'roboto',fontSize:'26px', fontWeight:500,color:'#364152'}}>
             Organization 
              </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'20px',fontWeight:400}}>
               {data.organization.name}<span style={{fontFamily:'roboto',fontWeight:400,fontSize:'13px',color:'#32A65D',ml:1}}> Active</span>
              </Typography>
              <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Market Segment
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organization.marketSegment}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                No.of.EMP
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organization.num_of_employee}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Created At
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organization.createdAt}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Founded Year
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organization.yearFounded}
               </Typography>
               <Divider sx={{color:'#C4C4C4', border: '1px solid #C4C4C4',width:"304px", mt:4,mb:4}}/>
               <Typography variant="h1" gutterBottom sx={{fontFamily:'roboto',fontSize:'26px', fontWeight:500,color:'#364152'}}>
                 Address
              </Typography>
              <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5,width:'305px'}}>
               Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
               </Typography>
            </Box>


            <Box sx={{display:'flex', flexDirection:'column',marginLeft:'70px'}}>
            <Typography variant="h1" gutterBottom sx={{fontFamily:'roboto',fontSize:'26px', fontWeight:500,color:'#364152',textTransform:'capitalize'}}>
             {data.user.first_name} {data.user.last_name} <span style={{fontFamily:'roboto',fontWeight:400,fontSize:'13px',color:'#32A65D',ml:1}}> Verified</span>
              </Typography>

              <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1}}>
                Email
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.user.email}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Mobile
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.user.mobile_number}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Role
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organizationRole.name}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Sub_Role_First
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organizationRole.sub_role_first}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                User Type
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5}}>
                {data.organizationRole.userType}
               </Typography>
               <Typography variant="p" sx={{color:'#FF6600', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:1.5}}>
                Organization Admin
               </Typography>
               <Typography variant="p" sx={{color:'#364152', fontFamily: 'roboto', fontSize:'18px',fontWeight:400,mt:0.5,textTransform:'capitalize'}}>
                {data.user.organizationAdmin}
               </Typography>
            </Box>           
        </Box>
        <Box sx={{backgroundColor: '#ffffff',border: '1px solid #C4C4C4',borderRadius:'12px',width:'300px',height:'150px',p:3,ml:3}}>
        <Typography variant="h1" gutterBottom sx={{fontFamily:'roboto',mb:3,fontSize:'26px', fontWeight:500,color:'#364152',textTransform:'capitalize'}}>
           Organization Category 
        </Typography>
        <Button variant="outlined" sx={{color:'#364152',border:'1px solid #C4C4C4',mr:2,gap:'6px'}}>
            <img alt="img3" src={data.organizationCategory[1].icon} style={{width:"21px",height:"19px"}} />
            <Typography>{data.organizationCategory[1].name}</Typography>
        </Button>
        <Button variant="outlined" sx={{color:'#364152',border:'1px solid #C4C4C4',gap:'6px'}}>
            <img alt="img2" src={data.organizationCategory[0].icon} style={{width:"21px",height:"19px"}} />
            <Typography>{data.organizationCategory[0].name}</Typography>
        </Button>
        <Button variant="outlined" sx={{color:'#364152',border:'1px solid #C4C4C4',mt:2,gap:'6px'}}>
            <img alt="img1" src="http://stcfileupload.mobilefirsthq.com/uploads/649ad319bb42b_cctv.png" style={{width:"21px",height:"19px"}} />
            <Typography>Ticket</Typography>
        </Button>

        </Box>
        <Button variant="text" sx={{color:'#FF3737',fontFamily:'roboto',fontWeight:500,textTransform:'capitalize', fontSize:"18px", width:'57px',height:"20px",m:4}}>Close</Button>
        </Box>
    )
}

export default Frame