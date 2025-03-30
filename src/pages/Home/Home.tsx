import { BarChartBox } from "../../components/BarChartBox/BarChartBox.tsx";
import { BigChartBox } from "../../components/BigChartBox/BigChartBox.tsx";
import { ChartBox } from "../../components/ChartBox/ChartBox.tsx";
import { PieChartBox } from "../../components/PieChartBox/PieChartBox.tsx";
import { TopBox } from "../../components/TopBox/TopBox.tsx";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data.ts";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>
        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>
        <div className="box box4">
          <PieChartBox />
        </div>
        <div className="box box5">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="box box6">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="box box7">
          <BigChartBox />
        </div>
        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </>
  );
};
