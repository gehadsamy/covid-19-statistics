import React from "react";
import { StatisticsContainer } from "./StatisticsDisplay.styled";
import { DateRange } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import Loader from "../../sharedComponets/uiComponents/Loader";
interface StatisticsDisplayProps {
  data: any;
  showDateRange: boolean;
  setShowDateRange: (show: boolean) => void;
  dateRange: any;
  setDateRange: (range: any) => void;
}
const StatisticsDisplay: React.FC<StatisticsDisplayProps> = ({
  data,
  showDateRange,
  setShowDateRange,
  dateRange,
  setDateRange,
}) => {
  if (!data) {
    return <Loader />;
  }
  return (
    <>
      <div className="">
        <div className="flex py-2">
          {" "}
          Choose the range
          <FaCalendarAlt
            className="mx-2 text-2xl cursor-pointer"
            onClick={() => setShowDateRange(!showDateRange)}
          />
        </div>

        <div className="absolute">
          {showDateRange && (
            <DateRange
              onChange={(item: any) => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              showPreview={false}
            />
          )}
        </div>
      </div>
      <StatisticsContainer>
        <div>
          <p>
            Positive Cases:
            <br />
            <span>{data?.positive || "-"}</span>
          </p>
          <p>
            Negative Cases:
            <br />
            <span>{data?.negative || "-"}</span>
          </p>
          <p>
            Pending Cases:
            <br />
            <span>{data?.pending || "-"}</span>
          </p>
        </div>
        <div>
          <p>
            Hospitalizations:
            <br />
            <span>{data?.hospitalizedCurrently || "-"}</span>
          </p>
          <p>
            ICU Cases:
            <br />
            <span>{data?.inIcuCurrently || "-"}</span>
          </p>
          <p>
            Ventilator Cases:
            <br />
            <span>{data?.onVentilatorCurrently || "-"}</span>
          </p>
        </div>
      </StatisticsContainer>
    </>
  );
};

export default StatisticsDisplay;
