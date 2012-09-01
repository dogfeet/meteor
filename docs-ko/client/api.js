Template.api.is_client = {
  id: "meteor_is_client",
  name: "Meteor.is_client",
  locus: "Anywhere",
  descr: ["불리안 변수.  클라이언트 환경에서 동작 중이면 true."]
};

Template.api.is_server = {
  id: "meteor_is_server",
  name: "Meteor.is_server",
  locus: "Anywhere",
  descr: ["불리안 변수. 서버 환경에서 동작 중이면 true."]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Anywhere",
  descr: ["클라이언트나 서버가 시작할 때 실행되는 코드."],
  args: [
    {name: "func",
     type: "Function",
     descr: "시작시 실행할 코드."}
  ]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Server",
  descr: ["레코드 집합을 Publish함."],
  args: [
    {name: "name",
     type: "String",
     descr: "어트리뷰트 집합의 이름. 만약 `null`이면 집합에 이름이 없는 것이고, 레코드 집합은 자동으로 연결된 모든 클라이언트로 전송된다."},
    {name: "func",
     type: "Function",
     descr: "클라이언트가 subscribe할때마다 서버에서 호출하는 함수. 함수 안에서 이용되는 `this`키워드는 publish 핸들러 객체이다. 만약 클라이언트에서 `subscribe`에 어떤 아규먼트를 넣어 호출했다면 이 함수는 그 똑같은 아규먼트를 가지고 호출된다."}
  ]
};

Template.api.subscription_set = {
  id: "publish_set",
  name: "<i>this</i>.set(collection, id, attributes)",
  locus: "Server",
  descr: ["publish 함수 안에서 호출되는 함수. 어트리뷰트를 세팅하는 명령을 큐에 넣는다."],
  args: [
    {name: "collection",
     type: "String",
     descr: "영향을 받아야 하는 콜렉션의 이름."
    },
    {name: "id",
     type: "String",
     descr: "영향을 받아야 하는 문서의 ID."
    },
    {name: "attributes",
     type: "Object",
     descr: "어트리뷰트의 키와 값."
    }
  ]
};

Template.api.subscription_unset = {
  id: "publish_unset",
  name: "<i>this</i>.unset(collection, id, keys)",
  locus: "Server",
  descr: ["publish 함수 내에서 호출한다. 어트리뷰트를 unset하는 명령어를 큐에 집어넣는다."],
  args: [
    {name: "collection",
     type: "String",
     descr: "명령어를 적용할 콜렉션의 이름"
    },
    {name: "id",
     type: "String",
     descr: "명령어를 적용할 도큐먼트의 ID"
    },
    {name: "keys",
     type: "Array",
     descr: "어트리뷰트 키의 배열"
    }
  ]
};

Template.api.subscription_complete = {
  id: "publish_complete",
  name: "<i>this</i>.complete()",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. 해당 구독이 완료되었음을 알리는 명령을 큐에 넣는다.(초기 어트리뷰트가 세팅된다)"]
};

Template.api.subscription_flush = {
  id: "publish_flush",
  name: "<i>this</i>.flush()",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. 보류 중인 모든 set, unset, complete메세지를 클라이언트로 보낸다."]
};

Template.api.subscription_stop = {
  id: "publish_stop",
  name: "<i>this</i>.stop()",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. 클라이언트의 subscription을 중지시킨다."]
};

Template.api.subscription_onStop = {
  id: "publish_onstop",
  name: "<i>this</i>.onStop(func)",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. subscription이 중지되었을 때 실행할 콜백 함수를 등록한다."],
  args: [
    {name: "func",
     type: "Function",
     descr: "콜백 함수"
    }
  ]
};

Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, onComplete])",
  locus: "Client",
  descr: ["레코드 집합을 subscription한다. 핸들러를 리턴한다. 핸들러에는 subscription을 중지시키는 stop()메서드가 있다."],
  args: [
    {name: "name",
     type: "String",
     descr: "subscription의 이름. 서버에서 publish()를 호출 했을 때의 이름과 매칭이 되어야 한다."},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "서버의 publish 함수에 넘겨줄 아규먼트이다. 이 아규먼트는 선택적인 것으로 있어도 되고 없어도 된다."},
    {name: "onComplete",
     type: "Function",
     descr: "만약 마지막 아규먼트가 함수라면 서버가 subscription을 완료했다는 신호가 왔을 때 호출된다. 이 함수에 아규먼트는 없다."}
  ]
};

Template.api.autosubscribe = {
  id: "meteor_autosubscribe",
  name: "Meteor.autosubscribe(func)",
  locus: "Client",
  descr: ["자동으로 subscription을 연결하거나 끊는다."],
  args: [
    {name: "func",
     type: "Function",
     descr: "[`Meteor.subscribe`](#meteor_subscribe)을 이용해 subscription하는 [`리액티브`](#reactivity) 함수이다. 의존성이 변하면 자동으로 재실행된다."}
    ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Anywhere",
  descr: ["네트워크 너머의 클라이언트에서 호출 할 Meteor 메서드를 정의한다."],
  args: [
    {name: "methods",
     type: "Object",
     descr: "키는 메서드의 이름이고 값은 함수인 딕셔너리"}
  ]
};

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Server",
  descr: ["Meteor 메서드 안에서 호출한다. 현재 클라이언트에서 다음 실행할 순서에 있는 메서드를 새로운 fiber에서 실행할 수 있게한다."]
};

Template.api.method_invocation_is_simulation = {
  id: "method_is_simulation",
  name: "<i>this</i>.is_simulation",
  locus: "Anywhere",
  descr: ["Meteor 메서드 안에서 호출한다. 이 함수가 Meteor 메서드의 안에서 호출되었다면 true를 리턴한다."]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Anywhere",
  descr: ["Meteor 메서드에서 던져진 에러를 나타내는 클래스."],
  args: [
    {name: "error",
     type: "Number",
     descr: "숫자로 된 에러 코드. HTTP 코드와 비슷하다.(eg, 404, 500)."},
    {name: "reason",
     type: "String",
     descr: "옵션. 사람이 읽을 수 있는 에러의 짧은 요약 메세지. 예를 들어 'Not Found'같은 것이다."},
    {name: "details",
     type: "String",
     descr: "옵션. 문자열로 된 스택 트레이스 같은 에러에 대한 추가 정보."}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(func, arg1, arg2, ... [, asyncCallback])",
  locus: "Anywhere",
  descr: ["여러 아규먼트와 함께 meteor 메서드를 호출한다."],
  args: [
    {name: "func",
     type: "String",
     descr: "호출할 meteor 메서드 이름"},
    {name: "arg1, arg2, ...",
     type: "JSON",
     descr: "옵션. 메서드의 아규먼트"},
    {name: "asyncCallback",
     type: "Function",
     descr: "옵션. 만약 이 함수가 넘겨진다면 이 meteor 메서드는 비동기적으로 동작한다. 그리고 정상적인 결과나 에러가 발생했을 때, 아규먼트로 넘겨진 이 콜백을 호출한다."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, asyncCallback])",
  locus: "Anywhere",
  descr: ["meteor 메서드를 호출할 때 아규먼트를 배열로 넘긴다."],
  args: [
    {name: "name",
     type: "String",
     descr: "호출할 meteor 메서드 이름"},
    {name: "params",
     type: "Array",
     descr: "메서드의 아규먼트"},
    {name: "asyncCallback",
     type: "Function",
     descr: "옵션. 만약 이 함수가 넘겨진다면 이 meteor 메서드는 비동기적으로 동작한다. 그리고 정상적인 결과나 에러가 발생했을 때, 아규먼트로 넘겨진 이 콜백을 호출한다."}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Client",
  descr: ["현재 연결 상태를 가져온다. 리액티브 데이터 소스이다."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Client",
  descr: [
    "클라이언트가 서버에 접속되어 있지 않다면 강제로 즉시 접속을 시도한다.",
    "클라이언트가 이미 접속되어 있다면 아무것도 하지 않는다."]
};

Template.api.connect = {
  id: "meteor_connect",
  name: "Meteor.connect(url)",
  locus: "Client",
  descr: ["다른 서버의 도큐먼트를 subscription하거나 meteor메서드를 호출하기 위해 또 다른 Meteor 서버에 접속한다."],
  args: [
    {name: "url",
     type: "String",
     descr: "다른 Meteor 앱의 URL"}
  ]
};

// onAutopublish
// onQuiesce

Template.api.meteor_collection = {
  id: "meteor_collection",
  name: "new Meteor.Collection(name, manager)", // driver undocumented
  locus: "Anywhere",
  descr: ["콜렉션을 생성한다."],
  args: [
    {name: "name",
     type: "String",
     descr: "콜렉션의 이름. 만약 null이면 관리되지 않는(서버와 sync되지 않은) 로컬 컬렉션을 만든다."},
    {name: "manager",
     type: "Object",
     descr: "해당 콜렉션을 관리할 meteor 커넥션. 만약 null이면 기본값으로 `Meteor`가 된다."
    }
    // driver
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Anywhere",
  descr: ["콜렉션에서 셀렉터에 일치하는 도큐먼트를 찾는다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "쿼리"}
  ],
  options: [
    {name: "sort",
     type: "Object: sort 지정자",
     type_link: "sortspecifiers",
     descr: "Sort order (default: natural order)"},
    {name: "skip",
     type: "Number",
     descr: "결과의 처음부터 건너뛸 도큐먼트의 갯 수"},
    {name: "limit",
     type: "Number",
     descr: "반환할 결과의 최대 갯수"},
    {name: "fields",
     type: "Object: field 지정자",
     type_link: "fieldspecifiers",
     descr: "포함 되거나 비포함 되어야할 필드의 딕셔너리"},
    {name: "reactive",
     type: "Boolean",
     descr: "기본값은 true이다. 만약 false로 설정되면, 리액티브하지 않게 동작한다."}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Anywhere",
  descr: ["skip이나 정렬같은 셀렉터에 매칭되는 도큐먼트중 가장 첫번째 도큐먼트를 반환한다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "쿼리"}
  ],
  options: [
    {name: "sort",
     type: "Object: sort specifier",
     type_link: "sortspecifiers",
     descr: "정렬 순서 (기본값: 정렬하지 않음)"},
    {name: "skip",
     type: "Number",
     descr: "결과의 처음부터 건너뛸 도큐먼트의 갯 수"},
    {name: "fields",
     type: "Object: field specifier",
     type_link: "fieldspecifiers",
     descr: "포함 되거나 비포함 되어야할 필드들의 딕셔너리"},
    {name: "reactive",
     type: "Boolean",
     descr: "기본값은 true이다. 만약 false로 설정되면, reactivity하지 않게 동작한다."}
  ]
};

Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["쿼리에 의해 반환된 도큐먼트의 갯 수를 반환한다."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["매칭되는 모든 도큐먼트를 배열로 반환한다."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback)",
  locus: "Anywhere",
  descr: ["매칭되는 각 도큐먼트마다 콜백 함수를 한 번 씩 호출한다."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "호출할 함수"}
  ]
};

Template.api.cursor_map = {
  id: "map",
  name: "<em>cursor</em>.map(callback)",
  locus: "Anywhere",
  descr: ["매칭되는 모든 도큐먼트에 맵 콜백을 적용시킨다. 결과를 배열로 리턴한다."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "호출할 함수"}
  ]
};

Template.api.cursor_rewind = {
  id: "rewind",
  name: "<em>cursor</em>.rewind()",
  locus: "Anywhere",
  descr: ["쿼리의 커서를 리셋한다."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Client",
  descr: ["쿼리를 지켜본다. 쿼리의 결과에 조작을 가하기 위한 콜백 함수들을 아규먼트로 받는다."],
  args: [
    {name: "callbacks",
     type: "Object (added, changed, moved, removed 라는 이름의 콜백 함수를 담고 있다.)",
     descr: "변경된 쿼리 결과를 전달하는 함수들"}
  ]
};

Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Anywhere",
  descr: ["도큐먼트를 해당 콜렉션에 추가한다. 추가한 도큐먼트의 _id를 반환한다."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "추가할 도큐먼트. 추가하기 전에는 _id 어트리뷰트가 없어야 한다."},
    {name: "callback",
     type: "Function",
     descr: "옵션. 만약 이 아규먼트가 존재한다면, 제일 첫 아규먼트가 에러 객체이고 에러가 없다면 _id가 된다."}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["콜렉션에서 하나 이상의 도큐먼트를 수정한다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "수정할 도큐먼트 지정자."},
    {name: "modifier",
     type: "Object: Mongo modifier",
     type_link: "modifiers",
     descr: "도큐먼트들을 어떻게 변경하는지에 대한 지정자."},
    {name: "callback",
     type: "Function",
     descr: "옵션. 만약 존재한다면, 아규먼트로 에러 객체를 넘겨서 호출한다."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "true이면 매칭되는 모든 도큐먼트를 수정한다. false이면 매칭되는 도큐먼트중 하나만 수정한다.(기본값)"}
  ]
};

Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["콜렉션에서 도큐먼트를 삭제한다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "지울 도큐먼트 지정자"},
    {name: "callback",
     type: "Function",
     descr: "옵션. 만약 존재한다면, 아규먼트로 에러 객체를 넘겨서 호출한다."}
  ]
};

Template.api.selectors = {
  id: "selectors",
  name: "Mongo-style Selectors"
};

Template.api.modifiers = {
  id: "modifiers",
  name: "Mongo-style Modifiers"
};

Template.api.sortspecifiers = {
  id: "sortspecifiers",
  name: "Sort Specifiers"
};

Template.api.fieldspecifiers = {
  id: "fieldspecifiers",
  name: "Field Specifiers"
};

Template.api.Context = {
  id: "context",
  name: "new Meteor.deps.Context",
  locus: "Client",
  descr: ["무효화 컨텍스트를 만든다. 무효화 컨텍스트는 코드 조각을 실행하는데에 쓰인다. 그리고 의존성을 기록해놔서 나중에 입력값이 바뀌면 재실행한다.", "하나의 무효화 컨텍스트는 기본적으로 딱 한 번만 실행되는 콜백 함수의 모음이다. [`on_invalidate`](#on_invalidate) 메서드를 이용해 그 모음에 콜백 함수를 추가한다. [`invalidate`](#invalidate)는 이벤트를 발생시켜 콜백 함수들을 실행한다."]
};

Template.api.current = {
  id: "current",
  name: "Meteor.deps.Context.current",
  locus: "Client",
  descr: ["현재 [`무효화 컨텍스트`](#context). 만약 [`run`](#run) 안에서 참조한게 아니라면 `null`이다."]
};

Template.api.run = {
  id: "run",
  name: "<em>context</em>.run(func)",
  locus: "Client",
  descr: ["컨텍스트 안에서 어떤 코드를 실행한다."],
  args: [
    {name: "func",
     type: "Function",
     descr: "실행 할 코드"}
  ]
};

Template.api.on_invalidate = {
  id: "on_invalidate",
  name: "<em>context</em>.on_invalidate(callback)",
  locus: "Client",
  descr: ["해당 컨텍스트가 무효화 되었을 때 호출할 `callback`을 등록한다. `callback`는 정확히 한 번만 실행된다."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "무효화 되었을 때 호출할 함수. 무효화된 컨텍스트를 아규먼트로 받는다."}
  ]
};

Template.api.invalidate = {
  id: "invalidate",
  name: "<em>context</em>.invalidate()",
  locus: "Client",
  descr: ["다음 [`Meteor.flush`](#meteor_flush)가 호출 되었을 때 해당 컨텍스트의 `on_invalidate|on_invalidate` 콜백 함수들이 호출되도록 해당 컨텍스트를 무효화 목록에 추가시킨다."]
};


// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_ui_render",
  name: "Meteor.ui.render(html_func, [options])",
  locus: "Client",
  descr: ["데이터가 변경되면 자동으로 업데이트되는 DOM 노드를 만든다."],
  args: [
    {name: "html_func",
     type: "HTML 문자열을 반환하는 Function",
     descr: "초기화 할 때나 데이터가 변경 되었을 때 호출되는 렌더 함수."}
  ],
  options: [
    {name: "events",
     type: "Object &mdash; event map",
     type_link: "eventmaps",
     descr: "화면에 그려진 엘리먼트에 적용할 이벤트."},
    {name: "event_data",
     type: "Any value",
     descr: "이벤트 핸들러의 `this`에 바인드할 값"
    }
  ]
};

Template.api.chunk = {
  id: "meteor_ui_chunk",
  name: "Meteor.ui.chunk(html_func, [options])",
  locus: "Client",
  descr: ["[`Meteor.ui.render`](#meteor_ui_render)안에서, HTML의 어떤 범위에 특수한 기능을 추가한다."],
  args: [
    {name: "html_func",
     type: "HTML 문자열을 반환하는 Function",
     descr: "초기화 할 때나 데이터가 변경 되었을 때 호출되는 렌더 함수."}
  ],
  options: [
    {name: "events",
     type: "Object &mdash; event map",
     type_link: "eventmaps",
     descr: "화면에 그려진 엘리먼트에 적용할 이벤트."},
    {name: "event_data",
     type: "Any value",
     descr: "이벤트 핸들러의 `this`에 바인드할 값"
    }
  ]
};

Template.api.listChunk = {
  id: "meteor_ui_listchunk",
  name: "Meteor.ui.listChunk(observable, doc_func, [else_func], [options])",
  locus: "Client",
  descr: ["데이터 베이스 쿼리를 관찰하고 [`Meteor.ui.render`](#meteor_ui_render)가 리액티브하게 업데이트하는 HTML을 만든다."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "관찰할 쿼리 커서. 리액티브 데이터 소스로써 순서가 있는 도큐먼트 리스트로 다뤄진다."},
    {name: "doc_func",
     type: "아규먼트로 하나의 도큐먼트를 받고, HTML을 반환하는 Function",
     descr: "각 도큐먼트를 아규먼트로 넣어 호출하는 렌더 함수"},
    {name: "else_func",
     type: "HTML을 반환하는 Function",
     descr: "쿼리의 결과가 비어있을 때 호출되는 렌더 함수"}
  ],
  options: [
    {name: "events",
     type: "Object &mdash; event map",
     type_link: "eventmaps",
     descr: "화면에 그려진 엘리먼트에 적용할 이벤트"}
  ]
};

Template.api.flush = {
  id: "meteor_flush",
  name: "Meteor.flush()",
  locus: "Client",
  descr: ["무효화되어 있는 모든 리엑티브를 업데이트한다. 화면에 보이지 않는 자동 업데이트 DOM 엘레먼트는 삭제해버린다."]
};

Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};

Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout",
  locus: "Anywhere",
  descr: ["일정 시간 동안 기다린 뒤에 함수를 호출한다."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "실행 할 함수"
    },
    {
      name: "delay",
      type: "Number",
      descr: "함수 호출을 하기 위해 기다릴 시간. 밀리초 단위"
    }
  ]
};

Template.api.setInterval = {
  id: "meteor_setinterval",
  name: "Meteor.setInterval",
  locus: "Anywhere",
  descr: ["함수를 반복해서 호출한다. 각 호출 사이에는 일정한 시간 간격이 있다."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "실행 할 함수."
    },
    {
      name: "delay",
      type: "Number",
      descr: "각 함수 호출 사이의 시간 간격. 밀리초 단위"
    }
  ]
};

Template.api.clearTimeout = {
  id: "meteor_cleartimeout",
  name: "Meteor.clearTimeout",
  locus: "Anywhere",
  descr: ["`Meteor.setTimeout`로 시작한 함수 호출 스케쥴링을 중지한다."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "setTimeout에서 리턴받은 핸들"
    }
  ]
};

Template.api.clearInterval = {
  id: "meteor_clearinterval",
  name: "Meteor.clearInterval",
  locus: "Anywhere",
  descr: ["`Meteor.setInterval`에 의해 스케쥴링되고 있는 반복적인 함수 호출을 중지한다."],
  args: [
    {
      name: "id",
      type: "Number",
      descr: "setInterval에서 리턴받은 핸들"
    }
  ]
};

Template.api.EnvironmentVariable = {
  id: "meteor_environmentvariable",
  name: "new Meteor.EnvironmentVariable()",
  locus: "Anywhere",
  descr: ["Meteor의 환경 변수를 생성한다."]
};

Template.api.environmentVariable_get = {
  id: "env_var_get",
  name: "<i>env_var</i>.get()",
  locus: "Anywhere",
  descr: ["EnvironmentVariable의 현재 값을 반환한다."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["`env_var`의 값 들을 `value`에 할당해 그것을 환경으로 삼아 `func`를 실행한다."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "환경 변수의 값 Desired value of the environment variable."},
    {name: "func",
     type: "Function",
     descr: "호출 할 함수"}
  ]
};

Template.api.bindEnvironment = {
  id: "env_var_bindenvironment",
  name: "<i>env_var</i>.bindEnvironment(func, onException, _this)",
  locus: "Anywhere",
  descr: ["Return a new function that calls `func` with `this` set to `_this`, and with environment variables set to their current values."],
  args: [
    {name: "func",
     type: "Function",
     descr: "Function to wrap"},
    {name: "onException",
     type: "Function",
     descr: "Function to call if `func` throws an exception.  It expects the thrown exception as its single argument."},
    {name: "_this",
     type: "Object",
     descr: "Value of `this` inside `func`."}
  ]
};

Template.api.set = {
  id: "session_set",
  name: "Session.set(key, value)",
  locus: "Client",
  descr: ["세션에 변수 값을 넣는다. 변수가 변하면 그 사실을 리스너에게 통보한다. (예: 해당 `key`에 대해서 [`Session.get`](#session_get)이 호출되면 템플릿 다시 그리기, [`Meteor.autosubscribe`](#meteor_autosubscribe)블럭 재실행이 일어난다."],
  args: [
    {name: "key",
     type: "String",
     descr: "값을 넣을 세션 변수의 이름. 예를 들자면, `selected_item`"},
    {name: "value",
     type: "Any type",
     descr: "`key`의 새로운 값."}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["세션 변수의 값을 가져온다. 만약 [`Meteor.deps`](#meteor_deps) 컨텍스트 안에서 호출 되었다면 [`Session.set`](#session_set)에 의해서 세션 변수가 변경 되었을 때 그 컨텍스트가 무효화된다."],
  args: [
    {name: "key",
     type: "String",
     descr: "반환할 세션 변수의 이름"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["한 세션 변수의 값이 주어진 또 다른 값과 같은지 비교한다. 만약 [`Meteor.deps`](#meteor_deps)안에서 호출 되었다면 다음에 세션 변수가 변경되었을 때 컨텍스트가 무효화 된다."],
  args: [
    {name: "key",
     type: "String",
     descr: "비교할 세션 변수의 이름"},
    {name: "value",
     type: "String, Number, Boolean, null, undefined",
     descr: "비교할 값"}
  ]
};

Template.api.httpcall = {
  id: "meteor_http_call",
  name: "Meteor.http.call(method, url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP 요청을 보낸다."],
  args: [
    {name: "method",
     type: "String",
     descr: '사용할 HTTP 메서드. 다음 네 가지를 사용할 수 있다. "`GET`", "`POST`", "`PUT`", "`DELETE`".'},
    {name: "url",
     type: "String",
     descr: '전송할 URL 주소'},
    {name: "asyncCallback",
     type: "Function",
     descr: "선택가능한 콜백 함수. 만약 이 아규먼트를 넘긴다면, 메서드는 비동기적으로 작동한다. 그리고 asyncCallback를 호출한다. 클라이언트에서 이 아규먼트는 필수이다."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "HTTP 요청의 body로 쓰일 문자열."
},
    {name: "data",
     type: "Object",
     descr: "JSON 문자열로 표현 가능한 객체. HTTP요청의 body로 사용된다. `content`를 덮어쓴다."},
    {name: "query",
     type: "String",
     descr: "URL에 추가될 쿼리 문자열. `url`의 쿼리 부분을 완전히 덮어쓴다."},
    {name: "params",
     type: "Object",
     descr: "요청 파라미터의 딕셔너리. 인코딩되어 URL이나(GET방식) 요청의 body에(PUT방식) 들어간다. 만약 아규먼트 중에 `content`나 `data`가 있다면, `params`는 반드시 URL에 위치한다."
    },
    {name: "auth",
     type: "String",
     descr: '`"사용자이름:비밀번호"`의 양식을 가진 HTTP basic authentication 문자열'},
    {name: "headers",
     type: "Object",
     descr: "HTTP 요청에 추가할 헤더들을 문자열 형태로 저장한 딕셔너리."},
    {name: "timeout",
     type: "Number",
     descr: "요청 후 기다릴 최대 시간의 밀리초 단위의 값. timeout은 기본값이 없다."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "만약 true이면 투명하게 HTTP 리다이렉션을 수행한다. 클라이언트에서는 false로 설정할 수 없다."}
  ]
};

Template.api.http_get = {
  id: "meteor_http_get",
  name: "Meteor.http.get(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP GET 요청을 보낸다. `Meteor.http.call(\"GET\", ...)`과 같다."]
};

Template.api.http_post = {
  id: "meteor_http_post",
  name: "Meteor.http.post(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP POST 요청을 보낸다. `Meteor.http.call(\"POST\", ...)`과 같다."]
};

Template.api.http_put = {
  id: "meteor_http_put",
  name: "Meteor.http.put(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP PUT 요청을 보낸다. `Meteor.http.call(\"PUT\", ...)`과 같다."]
};

Template.api.http_del = {
  id: "meteor_http_del",
  name: "Meteor.http.del(url, [options], [asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP DELETE 요청을 보낸다. `Meteor.http.call(\"DELETE\", ...)`과 같다. (JavaScript의 `delete` 키워드와 충돌을 피하기위해 `del`이라는 이름을 사용했다.)"]
};


