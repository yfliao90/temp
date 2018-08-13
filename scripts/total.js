
var total=function(e){
	var thisId=$(e).attr("id");
	if(!$(e).is(".checked")){
		$("."+thisId).removeClass("checked");
		$(e).addClass("checked");
		getAlldata();
	}
}
$('.dimtension').keyup(function(){
	getAlldata();
});
$("#qty").change(function(){
	getAlldata();
})
function getAlldata(){
	var  dataArr={
		layers:Number($(".layers.checked").val()),
		dimtensionLength:Number($("#dimtensionLength").val()),
		dimtensionWidth:Number($("#dimtensionWidth").val()),
		qty:Number($("#qty option:selected").val()),
		design:Number($(".design.checked").val()),
		thickness:Number($(".thickness.checked").val()),
		color:$(".color.checked").val(),
		finish:$(".surface.checked").val(),
		copper:$(".copper.checked").val(),
		time:$(".time.checked").val()
	}
	$(".price-list .layersInfo").html(dataArr.layers);
	$(".price-list .dimtensionInfo").html(dataArr.dimtensionLength+"-"+dataArr.dimtensionWidth);
	$(".price-list .qtyInfo").html(dataArr.qty);
	$(".price-list .designInfo").html(dataArr.design);
	$(".price-list .thicknessInfo").html(dataArr.thickness);
	$(".price-list .colorInfo").html(dataArr.color);
	$(".price-list .surfaceInfo").html(dataArr.finish);
	$(".price-list .copperInfo").html(dataArr.copper);
	$(".price-list .timeInfo").html(dataArr.time);
	//var priceStrAll = dataArr.layers+dataArr.dimtensionLength+dataArr.dimtensionWidth+dataArr.qty+dataArr.design;
	$.post("demo_test_post.php?route=formula",{
			layers:dataArr.layers,
			dimtensionLength:dataArr.dimtensionLength,
			dimtensionWidth:dataArr.dimtensionWidth,
			qty:dataArr.qty,
			differentDesign:dataArr.design,
			thickness:dataArr.thickness,
			//color:dataArr.color,
			surfaceFinish:dataArr.finish,
			copperWeight:dataArr.copper,
			productTime:dataArr.time
	},
	function(data,status){
		//alert(total);
		//console.log(dataArr.layers);
		//alert("数据: \n" + data + "\n状态: " + status);
		var priceStrAll = Number(data);
		console.log(priceStrAll);
		//$("#layers").show();
		//$("#layers").attr("data-allprice",priceStrAll.toFixed(2));	
		$("#goCheckAllPrice").html("USD$"+priceStrAll.toFixed(2));
		$("#goCheckAllPrice").attr("data-allprice",priceStrAll.toFixed(2));	
	});
	
	return dataArr;

}
getAlldata();
/*getAlldata();
console.log(1);
console.info(getAlldata())
console.log(2);*/
