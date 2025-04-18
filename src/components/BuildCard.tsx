import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, Typography, TypographyProps } from '@mui/material';

const StyledTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  marginBottom: theme.spacing(1),
}));

interface ComponentProps {
    building: {
        img: string, 
        title: string, 
        description: string[],
    };
    cardIndex: number;
  }

  function BuildCard({ building, cardIndex }: ComponentProps) {
    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: (cardIndex) % 2 === 0 ? 'row-reverse' : 'row',
        }}
      >
        <CardMedia
          component="img"
          alt={building.title}
          image={building.img}
          sx={{ width: (cardIndex) % 2 === 0 ? '50%' : '50%' }}
        />
        <Box sx={{ width: (cardIndex) % 2 === 0 ? '50%' : '50%', padding: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              {building.title}
            </Typography>
            {building.description.map((item, ind) => (
              <StyledTypography key={ind} variant="body2">
                {item}
              </StyledTypography>
            ))}
          </CardContent>
          <CardActions
            sx={{ justifyContent: (cardIndex) % 2 === 0 ? 'start' : 'end' }}
          >
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Box>
      </Card>
    );
  }
  

export default BuildCard;