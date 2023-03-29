import './App.css';
import { Box, Input,Textarea,Button } from '@chakra-ui/react'
function App() {
  return (
    <Box className='fundo'>
      <Box className='container'>
        <Box className='formulario' maxWidth='800px'  w={'100%'} >

          <h1 className='titulo'>Let’s Connect</h1>
          <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.</p>
          <Box w='100%' bg='white' className='box-form'>
          <h1 className='titulo'>Let’s Connect</h1>
          <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.</p>
            <Box>
              <label className='label'>Name</label>
              <Input className='input'  variant='outline'/>
            </Box>
            <Box>
              <label className='label'>Email</label>
              <Input  className='input' variant='outline'/>
            </Box>            
            <Box>
                <label className='label'>Company Name</label>
                <Input  className='input' variant='outline'/>
            </Box>
            <Box>
                <label className='label'>Phone Number</label>
                <Input  className='input' variant='outline'/>
            </Box>
            <Box w='100%'>
              <label className='label'>Subject</label>
              <Input w='100%' variant='outline'/>
            </Box>
            <Box w={'100%'} className='textarea'>
              <label className='label'>Your Message</label>
              <Textarea />
            </Box>
            <Button background={'#EC7E83'} className='botao'>Submit</Button>
          </Box>
        </Box>

        <Box className='cards'>
          <Box className='card' marginTop={'85px'}>
            <h3 className='titulo-box'>Our Commitment</h3>
            <Box className='box'>
              <p className='texto-box'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius dictum</p>
            </Box>
          </Box>

          <Box  className='card' marginTop={'64px'}>
            <h3 className='titulo-box'>Art Directing</h3>
            <Box className='box'>
              <p className="texto-box">
                Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla.
              </p>
              <label style={{display:'flex'}}><div className="phone"></div><p>+123 (4567) 8910</p></label>
              <label style={{display:'flex'}}><div className="email"></div><p>hello@example.com</p></label>
              <label style={{display:'flex'}}><div className="location"></div><p>120 Street Lorem Ipsum Sit Amet</p></label>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}

export default App;
