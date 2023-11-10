import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      recuperado: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products/')
      .then((response) => response.json())
      .then((prod) => {
        this.setState({
          products: prod,
          recuperado: true
        });
      });
  }

  mostrarTabla() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Typography variant="h4" style={{ color: 'red', marginBottom: '20px' }}>BEBIDAS GASEOSAS</Typography>
        <LocalBarIcon style={{ fontSize: 100, color: 'black', marginBottom: '20px' }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Código</TableCell>

                <TableCell align="center" sx={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', textTransform: 'uppercase'  }}>Descripción</TableCell>
                <TableCell align="center" sx={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', textTransform: 'uppercase'  }}>Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.products.map((prod) => (
                <TableRow key={prod.codigo}>
                  <TableCell align="center">{prod.codigo}</TableCell>
                  <TableCell align="center">{prod.descripcion}</TableCell>
                  <TableCell align="center">{prod.precio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

  render() {
    return this.state.recuperado ? this.mostrarTabla() : <div style={{ textAlign: 'center', marginTop: '20px' }}><CircularProgress /> Recuperando datos...</div>;
  }
}

export default App;
