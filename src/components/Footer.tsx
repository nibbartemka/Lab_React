import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const footerData = ['temkaProductions', 'M9124-09.04.04']

function Footer() {
    return (
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 3, md: 6 }}>
            {footerData.map((item, index) => (
              <Grid key={index} size={{ xs: 12, md: 6 }} >
                {item}
              </Grid>
            ))}
          </Grid>
        </Container>
    );
  }
  
  export default Footer;