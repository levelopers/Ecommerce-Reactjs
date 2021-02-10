import React from 'react'
import Header from '../../components/header/headerContainer'
import styles from './stylesheets/ingresarProducto.module.sass'
import { Form,Col,Button,FormLabel,FormControl,InputGroup, FormGroup} from 'react-bootstrap'

export default function IngresarProducto() {
    return (
      <div className={styles.outbox}>
        <Header />
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.title}>
              Ingrese producto
            </div>
            <div className={styles.form}>
                <FormGroup controlId="formNombreProducto">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl placeholder="" />
                </FormGroup>

                <FormGroup controlId="formDescripcion">
                    <FormLabel>Descripción</FormLabel>
                    <FormControl placeholder="" />
                </FormGroup>

                <FormGroup controlId="formLinkImagen">
                    <FormLabel>Link de la imagen</FormLabel>
                    <FormControl placeholder="" />
                </FormGroup>

                <Form.Row>
                  <Col>
                    <Form.Group controlId="">
                      <Form.Label>Tallas</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Color</Form.Label>
                      <Form.Control placeholder="" />
                    </Form.Group>
                  </Col>
                  
                  <Col>
                    <FormGroup controlId="formPrecio">
                        <FormLabel>Precio</FormLabel>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>S/.</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="" />
                        </InputGroup>
                    </FormGroup>

                    <Form.Group>
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control type="number" placeholder="" />
                    </Form.Group>
                  </Col>

                </Form.Row>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Departamento-Categoría</Form.Label>
                  <Form.Control as="select" defaultValue="Elige...">
                    <option>Mujeres - Basicos</option>
                    <option>Mujeres - Chaqueta</option>
                    <option>Varones - Prendas de punto</option>
                    <option>Varones - Jeans</option>
                    <option>Varones - Camperas</option>
                    <option>Niños - Niña</option>
                    <option>Niños - Niño</option>
                  </Form.Control>
                </Form.Group>
                

                <Button variant="primary" type="submit">
                    Registrar
                </Button>
            
            </div>
          </div>
        </div>
      </div>
    )
  }