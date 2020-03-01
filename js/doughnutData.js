var chartEl1 = document.getElementById("chart1"),
	chartEl2 = document.getElementById("chart2"),
    chartEl3 = document.getElementById("chart3"),
    chartEl4 = document.getElementById("chart4"),
	chartFlag1 = false,
	chartFlag2 = false,
    chartFlag3 = false;
    chartFlag4 = false;

// １つ目のチャート
var chart1Func = function() {
	var ctx = chartEl1.getContext('2d'),
	chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["できる","自信なし"],
			datasets: [{
				data: [70, 30,],
				backgroundColor: [
					//'lightpink',
					//'powderblue',
					'orange'
				]
			}]
		},
		options: { 
			legend: {
			labels: {
				fontColor: "#333",
				fontSize: 16
			}
			},
			title: {
				display: false,
				text: 'HTML'
			},
			responsive: false,
		}
	});
};


// ２つ目のチャート
var chart2Func = function() {
	var ctx = chartEl2.getContext('2d'),
		chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			//labels: ["できる","自信なし"],
			datasets: [{
				data: [60, 40],
				backgroundColor: [
					'orange',
				]
			}]
		},
		options: { 
			legend: {
			labels: {
				fontColor: "#dee6f2",
				fontSize: 16
			}
			},
			title: {
				display: false,
				text: 'SCSS'
			},
			responsive: false,
		}
	});
};


// ３つ目のチャート
var chart3Func = function() {
	var ctx = chartEl3.getContext('2d'),
		chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			//labels: ["調べながらできる","自信なし"],
			datasets: [{
				data: [50, 50],
				backgroundColor: [
					'orange',
				]
			}]
		},
		options: { 
			legend: {
			labels: {
				fontColor: "#dee6f2",
				fontSize: 1
			}
			},
			title: {
				display: false,
				text: 'JavaScript'
			},
			responsive: false,
		}
	});
};

// 4つ目のチャート
var chart4Func = function() {
	var ctx = chartEl4.getContext('2d'),
	chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			//labels: ["調べながらできる","自信なし"],
			datasets: [{
				data: [50, 50,],
				backgroundColor: [
					'orange',
				]
			}]
		},
		options: { 
			legend: {
			// labels: {
			// 	fontColor: "#bbb",
			// 	fontSize: 16,
			// }
			},
			title: {
				display: false,
				text: 'WordPress'
			},
			responsive: false,
		}
	});
};

// スクロール処理
var pieGraphAnim = function() {
	var wy = window.pageYOffset,
		wb = wy + screen.height - 300, // ウィンドウの最下部位置を取得
		// 各チャートの位置を取得
		chartElPos1 = wy + chartEl1.getBoundingClientRect().top,
		chartElPos2 = wy + chartEl2.getBoundingClientRect().top,
        chartElPos3 = wy + chartEl3.getBoundingClientRect().top;
        chartElPos4 = wy + chartEl4.getBoundingClientRect().top;

	// チャートの位置がウィンドウの最下部位置を超えたら起動
	if ( wb > chartElPos1 && chartFlag1 == false ) {
		chart1Func();
		chartFlag1 = true;
	}
	if ( wb > chartElPos2 && chartFlag2 == false ) {
		chart2Func();
		chartFlag2 = true;
	}
	if ( wb > chartElPos3 && chartFlag3 == false ) {
		chart3Func();
		chartFlag3 = true;
    }
    if ( wb > chartElPos4 && chartFlag4 == false ) {
		chart4Func();
		chartFlag4 = true;
	}
};


window.addEventListener('load', pieGraphAnim); // 読み込み時の処理
window.addEventListener('scroll', pieGraphAnim); // スクロール時の処理