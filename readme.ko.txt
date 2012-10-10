jQuery.Paging

jQuery를 위한 간단한 페이징.

사용법 : $('#paging').paging({max:50});

속성 :
	item : 페이징 요소 태그명, 기본값 "a".
	itemClass : 페이징 요소 중 페이지 수 CSS 클래스, 기본값 "paging-item".
	itemCurrent : 현재 페이지를 나타내는 CSS 클래스이며 페이징 요소와 중첩됨, 기본값 "selected".
	format : 페이지를 나타낼 내용, 기본값 "[%d]".
	sideClass : 다음 또는 이전 버튼 CSS 클래스, 기본값 "paging-side".
	next : 다음 버튼 내용. 기본값 "[{5}&gt;]" ("[>]")
	prev : 이전 버튼 내용. 기본값 "[{4}&lt;]" ("[<]")
	length : 페이지 표시할 개수. 기본값 10.
	max : 최대 표현할 페이지 수. 기본값 1.
	current : 현재 페이지 정의. 기본값 1.
	href : a 태그일 때 링크 주소를 정의. 기본값 "#%d"
	event : 기본 이벤트 활성화. 새로고침 없이 동적으로 페이징 초기화됨. ajax에 유용. 기본값 true.
	>event=true 일 때 가능한 이벤트 정의.
	onclick : 페이징 버튼 클릭 시 호출. false 반환 시 동적으로 페이지가 바뀌지 않음.
	onprev : 이전 버튼 초기화 시 이벤트. 'this' 는 이전 버튼 요소를 가리킴.(plain DOM. not jQuery!)
	onnext : 다음 버튼 초기화 시 이벤트. 'this' 는 다음 버튼 요소를 가리킴.(plain DOM. not jQuery!)
	onitem : 각 페이지 버튼 초기화 시 이벤트. 'this' 는 각 페이지 버튼 요소를 가리킴.

치환자 (format,next,prev 속성 전용)
{0} = 클릭 시 페이지
{1} = 페이지 길이
{2} = 처음 페이지
{3} = 마지막 페이지
{4} = 이전 파트의 처음 페이지
{5} = 다음 파트의 마지막 페이지