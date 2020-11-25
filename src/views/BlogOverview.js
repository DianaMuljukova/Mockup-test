import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import Table from "./Table";

const BlogOverview = ({ smallStats, tableData }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
            percentage={stats.percentage}
            increase={stats.increase}
            decrease={stats.decrease}
            borderColor={stats.borderColor}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* Users Overview */}

          <Table tableData={tableData} />


      {/*/!* Users by Device *!/*/}
      {/*<Col lg="4" md="6" sm="12" className="mb-4">*/}
      {/*  <UsersByDevice />*/}
      {/*</Col>*/}

      {/*/!* New Draft *!/*/}
      {/*<Col lg="4" md="6" sm="12" className="mb-4">*/}
      {/*  <NewDraft />*/}
      {/*</Col>*/}

      {/*/!* Discussions *!/*/}
      {/*<Col lg="5" md="12" sm="12" className="mb-4">*/}
      {/*  <Discussions />*/}
      {/*</Col>*/}

      {/*/!* Top Referrals *!/*/}
      {/*<Col lg="3" md="12" sm="12" className="mb-4">*/}
      {/*  <TopReferrals />*/}
      {/*</Col>*/}
    </Row>
  </Container>
);

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Товаров в инвентаре",
      value: "7",
      borderColor: "#54ADFF",
      attrs: { md: "6", sm: "6" },
    },
    {
      label: "Товаров на подтверждении",
      value: "45",
      borderColor: "#63C2DE",
      attrs: { md: "6", sm: "6" },
    },
    {
      label: "Товаров подтверждено",
      value: "23",
      borderColor: "#4DBD74",
      attrs: { md: "6", sm: "6" },
    },
    {
      label: "Заказов оформлено",
      value: "20",
      borderColor: "#D582F2",
      attrs: { md: "6", sm: "6" },
    },
  ],
  tableData: [
    {
      asin: {
        name: 'Сетевое зарядное устройство Apple Mag12345678.Сетевое зарядное устройство Apple Mag12345678.Сетевое зарядное устройство Apple Mag12345678.Сетевое зарядное устройство Apple Mag12345678.',
        sn: '6gdh463',
        updated: 'today',
        label: 'Beuty & Personal Care',
        photo: require("../images/store-data-images/1.svg")
      },
      price: '$2 988',
      fees: {
        fees: '$7.4',
        net: '$8.54',
      },
      rank: '#9890',
      rating: {
        rating: '4.7',
        reviews: '23.45'
      },
      sales: {
        sales: '1,56',
        sallers_total: '2'
      },
      taype: 'FAB',
      revenue: '$21,98',
      amazon: '$21,98',
      BSR: '$21,98',
      FBA: '$21,98',
      barcode: 'Добавить',
    },
    {
      asin: {
        name: 'Сетевое зарядное устройство Apple Mag...',
        sn: '6gdh463',
        updated: 'today',
        label: 'Beuty & Personal Care',
        photo: require("../images/store-data-images/1.svg")
      },
      price: '$2 988',
      fees: {
        fees: '$7.4',
        net: '$8.54',
      },
      rank: '#9890',
      rating: {
        rating: '4.7',
        reviews: '23.45'
      },
      sales: {
        sales: '1,56',
        sallers_total: '2'
      },
      taype: 'FAB',
      revenue: '$21,98',
      amazon: '$21,98',
      BSR: '$21,98',
      FBA: '$21,98',
      barcode: 'Добавить',
    },
    {
      asin: {
        name: 'Сетевое зарядное устройство Apple Mag...',
        sn: '6gdh463',
        updated: 'today',
        label: 'Beuty & Personal Care',
        photo: require("../images/store-data-images/2.svg")
      },
      price: '$2 988',
      fees: {
        fees: '$7.4',
        net: '$8.54',
      },
      rank: '#9890',
      rating: {
        rating: '4.7',
        reviews: '23.45'
      },
      sales: {
        sales: '1,56',
        sallers_total: '2'
      },
      taype: 'FAB',
      revenue: '$21,98',
      amazon: '$21,98',
      BSR: '$21,98',
      FBA: '$21,98',
      barcode: 'Добавить',
    },
  ]
};

export default BlogOverview;
