function validate(){var a=document.getElementById("s").value;if(a.replace(/^\s+(.*?)\s+$/,'$1')==''){alert('搜索关键词不能为空。');return false;}
return true;}
function pagedSearch(index){document.getElementById("curPage").value=index;document.getElementById("searchForm").submit();}
function mysubmit(){var suc=validate();if(suc==true){document.searchForm.submit();}}
document.writeln("<script type=\"text/javascript\" src=\"//js.users.51.la/20650105.js\"></script>");