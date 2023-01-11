import { Container, Title } from "../services/StyledComponents"

const Nosotros = () => {
  return (
    <Container padding='2rem 10%'>
      <Title primary={true}>¿Quienes somos?</Title>
      <Title>Somos un dojo local de la zona norte de Córdoba, Argentina.<br/>Vendemos productos como tambien enseñamos artes marciales,<br/>somos una escuela para que niños, adolecentes y adultos vengan a aprender, divertirse, relajarse y crecer </Title>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8104.284748100065!2d-64.24955073121033!3d-31.347056155630362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x533854a0877b9b56!2sSakura%20doyo%20karate!5e0!3m2!1ses-419!2sar!4v1673319247081!5m2!1ses-419!2sar" width="600" height="450" style={{'borderRadius':'8px', 'margin':'20px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="📍Sakura Dojo"></iframe>

    </Container>
  )
}

export default Nosotros