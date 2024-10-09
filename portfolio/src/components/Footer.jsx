import Alert from 'react-bootstrap/Alert';

function Footer() {
  return (
    <>
      {[
     
        'info'
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
         Copyright &copy; 2024, Matthew Weigandt
          <Alert.Link href="https://github.com/Mattw05">My other Projects</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
    </>
  );
}

export default Footer;