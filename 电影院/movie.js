$(function() {

	var data = [　　{
		"name": "X战警：逆转未来",
		"director": "布莱恩·辛格",
		"actor": "休·杰克曼 迈克尔·法斯宾德",
		"price": "120元",
		"time": "129分钟",
		"type": "动作/科幻",
		"introduction": "故事的设定发生在当下，变种人族群遭到了前所未有的毁灭性打击，而这一切的根源是“魔形女”瑞文。"
	}, 　　 {
		"name": "澳门风云",
		"director": "王晶",
		"actor": "周润发/谢霆",
		"price": "90元",
		"time": "93分钟",
		"type": "喜剧/动作",
		"introduction": "影片讲述的是外号“赢尽天下无敌手”的石一坚和他的朋友家人一起布下并利用局从犯罪集团的手中逃脱的故事"
	}, 　 {
		"name": "冰雪奇缘",
		"director": "克里斯·巴克",
		"actor": "克里斯汀·贝尔/伊迪娜·门泽尔",
		"price": "100元",
		"time": "102分钟",
		"type": "动画/冒险",
		"introduction": "影片讲述一个严冬咒语令王国被冰天雪地永久覆盖，安娜和山民克里斯托夫以及他的驯鹿搭档组队出发，为寻找姐姐拯救王国展开一段冒险"
	}, 　 {
		"name": "超凡蜘蛛侠2",
		"director": "马克·韦布",
		"actor": "安德鲁·加菲尔德/艾玛·斯通",
		"price": "120元",
		"time": "142分钟",
		"type": "科幻/奇幻",
		"introduction": "影片讲述了彼得·帕克的生活依然很忙，而格温毕业后考虑去牛津大学继续深造。“电光人”出现后，彼得的生活更不得安宁"
	}, 　　　 {
		"name": "催眠大师",
		"director": "陈正道",
		"actor": "徐峥/莫文蔚",
		"price": "90元",
		"time": "102分钟",
		"type": "剧情/悬疑",
		"introduction": "影片讲述了知名心理治疗师徐瑞宁和棘手的女病人任小妍之间发生的故事。"
	}, 　　 {
		"name": "终结者：创世纪",
		"director": "阿兰·泰勒",
		"actor": "艾米莉亚·克拉克/杰·科特尼",
		"price": "100元",
		"time": "130分钟",
		"type": "动作/科幻",
		"introduction": "超级电脑“天网”阻止人类抵抗领袖John Connor诞生的行动失败，时隔13年后，在“审判日”到来之前"
	}, 　　 {
		"name": "人再囧途之泰囧",
		"director": "徐峥",
		"actor": "休·杰克曼 迈克尔·法斯宾德",
		"price": "100元",
		"time": "105分钟",
		"type": "喜剧",
		"introduction": "商业成功人士徐朗用了五年时间发明了一种叫“油霸”的神奇产品。"
	}, 　　　 {
		"name": "夏日大作战",
		"director": "细田守",
		"actor": "神木隆之介/谷村美月",
		"price": "120元",
		"time": "114分钟",
		"type": "喜剧/动画",
		"introduction": "高中生小矶健二夏日的一天，他应邀来到美丽的学姐——阵内夏希的家乡打工。结果发现。"
	}];

	$.each(data, function(i, item) {
		var html = '';
		i = i + 1;
		html += '<ul class="movie" id="movie' + i + '"><li class="mmm">电影名：' + item['name'] + '</li><li>导演：' + item['director'] + '</li><li>主演：' + item['actor'] + '</li><li>票价：' + item['price'] + '</li><li>时长：' + item['time'] + '</li><li>类型：' + item['type'] + '</li><li>简介：' + item['introduction'] + '</li></ul>';
		var x = 'showInfo' + i;
		html += '<div onselectstart="return false;" class="infomovie" id=' + x + '>场次信息(点击可查看具体场次信息并进行订票)</div><ul style="display:none" class="chang" id="chang' + i + '"><li>场次一</li><li>电影编号:' + i + '</li><li>场次:' + i + '001</li><li>时间：17:30</li><li>放映厅:1号厅</li><div class="ticket1">订票</div><li>场次二</li><li>电影编号:' + i + '</li><li>场次:' + i + '002</li><li>时间：19:30</li><li>放映厅:2号厅</li><div class="ticket2">订票</div></ul>'
		$('#show').append(html);
		var a = a + 1;
	});

	for (var i = 0; i < 9; i++) {
		(function(num) {
			var x = '#chang' + num;
			var y = '#showInfo' + num;
			$(y).click(function() {
				$(x).toggle();
			});
		})(i);

	}

	var mform = "<ul>";
	for (var i = 1; i <= 5; i++) {
		for (var j = 1; j <= 8; j++) {

			mform += '<input class="seat" type="checkbox" name="' + i + '" name2="' + j + '"/>';
		}
		mform += '<br/>'
	}
	$('#ticketshow').html(mform);



	$("#cancel").click(function() {
		$('#allshow').css("display", "none");
	});

	var time = "";
	var ting = "";
	$(".ticket1").click(function() {
		for (var i = 1; i <= 40; i++) {
			$("input").eq(i).attr("checked", false);
		}
		$('#allshow').css("display", "block");
		time = "17:30";
		ting = "1号厅";
		for (var i = 1; i < 9; i++) {
			var x = "#chang" + i;
			if ($(x).css("display") == "block") {
				var y = "#movie" + i + " .mmm";
				tname = $(y).text();
			}
		}
	});

	$(".ticket2").click(function() {
		for (var i = 1; i <= 40; i++) {
			$("input").eq(i).attr("checked", false);
		}
		$('#allshow').css("display", "block");
		time = "19:30";
		ting = "2号厅";
		for (var i = 1; i < 9; i++) {
			var x = "#chang" + i;
			if ($(x).css("display") == "block") {
				var y = "#movie" + i + " .mmm";
				tname = $(y).text();
			}
		}
	});

	var seatx = [];
	var seaty = [];

	$("#sure").click(function() {
		var a = $("input");
		var count1 = 0;
		var count2 = 0;
		for (var i = 1; i <= 40; i++) {
			if (a.eq(i).prop("checked")) {
				seatx[count1++] = a.eq(i).attr('name');
				seaty[count2++] = a.eq(i).attr('name2');
			}

		}
		$("#tseat").html("");
		$('#allshow').css("display", "none");
		$('#confirm').css("display", "block");
		$("#tname").html(tname);
		$("#tc").html('开始时间：' + time);
		$("#ting").html('厅号：' + ting);
		for (var j = 0; j < (count1); j++) {
			$("#tseat").append('座位：第' + seatx[j] + '排 第' + seaty[j] + '列<br/>');
		}
	})



	$("#surec").click(function() {
		$('#confirm').css("display", "none");
	})

})