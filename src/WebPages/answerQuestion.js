qsNo=0;
exam=[{
  input: "",
  multi: false,
  opt: ["a", "b", "c", "d"],
  qs: "who",
  req: false,
  selected: null,
  solution: ["a"]
}, {
  input: "",
  multi: false,
  opt: ["a", "b", "c", "d"],
  qs: "what",
  req: false,
  selected: null,
  solution: ["b"]
}, {
  input: "",
  multi: false,
  opt: ["a", "b", "c", "d"],
  qs: "where",
  req: false,
  selected: null,
  solution: ["c"]
}, {
  input: "",
  multi: false,
  opt: ["a", "b", "c", "d"],
  qs: "why",
  req: false,
  selected: null,
  solution: ["d"]
}, {
  input: "",
  multi: true,
  opt: ["a", "b", "c", "d"],
  qs: "how",
  req: false,
  selected: null,
  solution: ["a", "b", "c", "d"]
}];

function setQsNo(){
  var q=$('#qsNo').val()-1;
  if(q>exam.length)
  	$('#qsNo').val(qsNo+1);
  else{
    while(qsNo != q){
      if(qsNo<q)
        loadQs(1);
      if(qsNo > q)
        loadQs(-1);
    }
  }
}

function loadQs(m) {
  if (m == 0 || qsNo > 0 && m == -1 || qsNo < exam.length-1 && m == 1){
    qsNo = qsNo + m;
    $('#qsNo').val(qsNo+1)
  }
  else
    return;
  $('#qs').text(exam[qsNo].qs);
  loadOptions();
  console.log(exam);
}

function loadOptions(){
  for (i = 0; i < 4; i++) {
    if (i < exam[qsNo].opt.length){
        $('.options').eq(i).text(exam[qsNo].opt[i]);
        $('.options').eq(i).show();
    }else
      $('.options').eq(i).hide();
  }
  $('.options').removeClass('selected');
  if(exam[qsNo].selected!=null)
    $('.options').eq(exam[qsNo].selected).addClass('selected');
}

function selectOption(option) {
  if (!exam[qsNo].multi)
    $(".options").removeClass("selected");
  $(".options").eq(option).toggleClass('selected');
  exam[qsNo].selected = exam[qsNo].opt[option];
}