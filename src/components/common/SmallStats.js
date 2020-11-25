import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Card, CardBody } from "shards-react";
import "../../styles/states/style.css"

class SmallStats extends React.Component {

  render() {
    const { variation, label, value, borderColor } = this.props;

    const cardClasses = classNames(
      "stats-small",
      variation && `stats-small--${variation}`
    );

    const cardBodyClasses = classNames(
      variation === "1" ? "d-flex align-items-center state-item" : "px-0 pb-0"
    );


    return (
      <Card small className={cardClasses}>
        <CardBody className={cardBodyClasses}>
            <div className="state-value-wrapper" style={{border: `3px solid ${borderColor}`}}>
              <span className="state-value">{value}</span>
            </div>
            <div>{label}</div>
        </CardBody>
      </Card>
    );
  }
}

SmallStats.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The percentage number or string.
   */
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether is a value increase, or not.
   */
  increase: PropTypes.bool,
  /**
   * The Chart.js configuration object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options object.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.array.isRequired,
  /**
   * The chart labels.
   */
  chartLabels: PropTypes.array
};

SmallStats.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: "Label",
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};

export default SmallStats;
