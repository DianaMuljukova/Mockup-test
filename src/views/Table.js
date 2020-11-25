import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Form, FormSelect, FormGroup
} from "shards-react";
import "../styles/store-table/styles.css";
import shortid from "shortid";

import PageTitle from "../components/common/PageTitle";

const calculateFeesImg = require("../images/store-data-images/calculate-fees.svg");
const jam_trash = require("../images/store-data-images/jam_trash.svg");
const filter = require("../images/store-data-images/filter.svg");

const Table = ({tableData}) => (
  <Container fluid className="main-content-container ">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Список товаров" className="text-sm-left"/>
    </Row>

    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <Row className="align-items-center store-table-header">
              <Col sm="2" className="d-flex mb-2 mb-sm-0">
                <Form className="d-flex">
                  <InputGroup seamless className="ml-3">
                    <InputGroupAddon type="prepend">
                      <InputGroupText>
                        <i className="material-icons">search</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <FormInput
                      className="navbar-search"
                      placeholder=""
                    />
                  </InputGroup>
                </Form>
              </Col>
              <Col sm="7">
                <div>
                  <img className="mr-1" src={filter} alt="filter"/>
                  Фильтр
                </div>
              </Col>
              <Col sm="3 d-flex justify-content-end align-items-center">
                <div
                  className="store-table-fs-14 store-table-items-color mr-3">Товары
                  в инвентаре
                </div>
                <FormGroup className="m-0">
                  <FormSelect>
                    <option>10 rows</option>
                    <option>10 rows</option>
                  </FormSelect>
                </FormGroup>
              </Col>
            </Row>

          </CardHeader>
          <CardBody className="p-0 pb-3" style={{overflow: 'auto'}}>
            <table className="table mb-0">
              <thead className="bg-light">
              <tr className="store-table-title-row">
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0 text-center">
                  ASIN
                </th>
                <th scope="col" className="border-0">
                  Price
                </th>
                <th scope="col" className="border-0">
                  Fees & Net
                </th>
                <th scope="col" className="border-0">
                  Rank
                </th>
                <th scope="col" className="border-0">
                  Ranting
                </th>
                <th scope="col" className="border-0 text-center">
                  Sales
                </th>
                <th scope="col" className="border-0 text-center">
                  Sallers total
                </th>
                <th scope="col" className="border-0 text-center">
                  Taype
                </th>
                <th scope="col" className="border-0 text-center">
                  Revenue
                </th>
                <th scope="col" className="border-0 text-center">
                  Amazon $
                </th>
                <th scope="col" className="border-0 text-center">
                  BSR
                </th>
                <th scope="col" className="border-0 text-center">
                  FBA
                </th>
                <th scope="col" className="border-0 text-center">
                  Штрих код
                </th>
                <th scope="col" className="border-0">
                  <img src={jam_trash} alt=""/>
                </th>
              </tr>
              </thead>
              {tableData.map((data, idx) => {
                return (
                  <tbody key={shortid()} className="store-table-body">
                  <tr>
                    <td
                      className="store-table-items-color align-middle">{idx + 1}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="custom-control custom-checkbox mb-1">
                          <input type="checkbox"
                                 className="custom-control-input"
                                 id={`formsCheckboxChecked${idx}`}/>

                          <label className="custom-control-label"
                                 htmlFor={`formsCheckboxChecked${idx}`}></label>
                        </div>

                        <img src={data.asin.photo} alt={data.asin.name}
                             className="mr-2"/>
                        <div>
                          <div className="store-table-product-name">{data.asin.name}</div>
                          <div><span
                            className="store-table-items-color mr-1">ASIN</span>{data.asin.sn}
                            <span className="mr-1 ml-1">|</span>
                            <span
                              className="store-table-items-color">updated {data.asin.updated}</span>
                          </div>
                          <span className="store-table-label">{data.asin.label}</span>
                        </div>
                      </div>
                    </td>
                    <td>{data.price}</td>
                    <td>
                      <div style={{width: '104px'}}>
                        <div><span
                          className="store-table-items-color">Fees</span> {data.fees.fees}
                        </div>
                        <div><span
                          className="store-table-items-color">Net</span> {data.fees.net}
                        </div>
                        <div
                          className="d-flex store-table-calculate-label store-table-blue-color">
                          <img className="mr-1" src={calculateFeesImg}
                               alt="calculate_fees"/>Calculate fees
                        </div>
                      </div>
                    </td>
                    <td>{data.rank}</td>
                    <td>
                      <div>
                        <div>{data.rating.rating}
                          {[1, 2, 3, 4, 5].map((star, i) => (
                            data.rating.rating && i + 1 <= Math.floor(data.rating.rating) ?
                              <i className="material-icons" style={{color: '#FFC632'}} key={shortid()}>star</i> :
                              <i className="material-icons" style={{color: '#C8CED3'}} key={shortid()}>star</i>
                          ))}
                        </div>
                        <div
                          className="store-table-small-text">{data.rating.reviews} reviews
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{data.sales.sales}</td>
                    <td className="text-center">{data.sales.sallers_total}</td>
                    <td className="text-center">{data.taype}</td>
                    <td className="text-center">{data.revenue}</td>
                    <td className="text-center">{data.amazon}</td>
                    <td className="text-center">{data.BSR}</td>
                    <td className="text-center">{data.FBA}</td>
                    <td className="store-table-blue-color">{data.barcode}</td>
                    <td><i className="material-icons mr-1">delete</i></td>
                  </tr>
                  </tbody>
                )
              })}
            </table>
          </CardBody>
          <CardFooter className="border-top text-right">
            <Button outline size="sm" theme="light" className="mb-2 mr-1">
              Сбросить
            </Button>
            <Button theme="primary" className="mb-2 mr-1">
              Заказать
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Table;
