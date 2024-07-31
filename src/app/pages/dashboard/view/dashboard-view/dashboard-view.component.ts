import { Component, Input, OnInit } from '@angular/core';
import { getCSSVariableValue } from '../../../../_metronic/kt/_utils';


@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {
  @Input() chartColor: string = '';
  @Input() strokeColor: string = '';
  @Input() chartHeight: string = '';
  chartOptions: any = {};
  currentTime:  any

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = getChartOptions(
      this.chartHeight,
      this.chartColor,
      this.strokeColor
    );
   const hours = new Date().getHours();
   if(hours >= 1 && hours <12 ){
    this.currentTime = "Good Morning"
   } else if (hours >= 12 && hours < 18){
    this.currentTime = "Good Afternoon"
   } else{
    this.currentTime = "Good Evening"
   }
  }
}

function getChartOptions(
  chartHeight: string,
  chartColor: string,
  strokeColor: string
) {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const color = getCSSVariableValue('--bs-' + chartColor);

  return {
    series: [
      {
        name: 'Net Profit',
        data: [],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 0,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: borderColor,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: number) {
          return '$' + val + ' thousands';
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ['transparent'],
    markers: {
      colors: [color],
      strokeColors: [strokeColor],
      strokeWidth: 3,
    },
  };

}
