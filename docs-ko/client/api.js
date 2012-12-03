Template.api.isClient = {
  id: "meteor_isClient",
  name: "Meteor.isClient",
  locus: "Anywhere",
  descr: ["Boolean 변수. 클라이언트 환경이면 true."]
};

Template.api.isServer = {
  id: "meteor_isServer",
  name: "Meteor.isServer",
  locus: "Anywhere",
  descr: ["Boolean 변수. 서버 환경이면 true."]
};

Template.api.startup = {
  id: "meteor_startup",
  name: "Meteor.startup(func)",
  locus: "Anywhere",
  descr: ["클라이언트나 서버가 시작할 때 실행되는 코드."],
  args: [
    {name: "func",
     type: "Function",
     descr: "시작 시 실행할 코드."}
  ]
};

Template.api.absoluteUrl = {
  id: "meteor_absoluteurl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Anywhere",
  descr: ["앱에서의 절대경로 URL를 만들어낸다. 서버는 환경 변수 `ROOT_URL`을 읽어서 현재 어디에서 작동중인지 알아낸다. `meteor deploy` 할 때에 이 변수는 자동으로 설정된다. 하지만 `meteor bundle` 할 때에는 반드시 설정해주어야 한다."],
  args: [
    {name: "path",
     type: "String",
     descr: '루트 URL의 뒤에 붙일 경로. "`/`"로 시작하지 않아야 한다.'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "HTTPS URL을 만들어낸다."
    },
    {name: "replaceLocalhost",
     type: "Boolean",
     descr: "localhost를 127.0.0.1로 변환한다. 도메인 이름을 localhost로 인식하면 안될때 유용하다."},
    {name: "rootUrl",
     type: "String",
     descr: "기존의 ROOT_URL 환경 변수를 덮어쓴다. 예: \"`http://foo.example.com`\""
    }
  ]
};

Template.api.publish = {
  id: "meteor_publish",
  name: "Meteor.publish(name, func)",
  locus: "Server",
  descr: ["레코드를 Publish함."],
  args: [
    {name: "name",
     type: "String",
     descr: "애트리뷰트의 이름. 만약 `null`이면 레코드에 이름이 없다는 의미고 자동으로 연결된 모든 클라이언트에 전송한다."},
    {name: "func",
     type: "Function",
     descr: "클라이언트가 subscribe할 때마다 서버에서 호출하는 함수. 함수 안에서 `this`는 publish 핸들러 객체이다. 클라이언트에서 `subscribe`를 호출할 때 아규먼트를 주면 이 함수가 호출될 때 아규먼트로 넘어진다."}
  ]
};

Template.api.subscription_set = {
  id: "publish_set",
  name: "<i>this</i>.set(collection, id, attributes)",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. 애트리뷰트를 세팅하는 명령을 큐에 넣는다."],
  args: [
    {name: "collection",
     type: "String",
     descr: "컬렉션의 이름."
    },
    {name: "id",
     type: "String",
     descr: "문서의 ID."
    },
    {name: "attributes",
     type: "Object",
     descr: "키-밸류 형태의 애트리뷰트 딕셔너리"
    }
  ]
};

Template.api.subscription_unset = {
  id: "publish_unset",
  name: "<i>this</i>.unset(collection, id, keys)",
  locus: "Server",
  descr: ["publish 함수 내에서 호출한다. 애트리뷰트를 unset하는 명령어를 큐에 집어넣는다."],
  args: [
    {name: "collection",
     type: "String",
     descr: "컬렉션의 이름"
    },
    {name: "id",
     type: "String",
     descr: "도큐먼트의 ID"
    },
    {name: "keys",
     type: "Array",
     descr: "애트리뷰트 키의 배열"
    }
  ]
};

Template.api.subscription_complete = {
  id: "publish_complete",
  name: "<i>this</i>.complete()",
  locus: "Server",
  descr: ["publish 함수 안에서 호출한다. 해당 구독이 완료됐음을 알리는 명령을 큐에 넣는다.(초기 애트리뷰트이 세팅된다)"]
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

Template.api.subscription_userId = {
  id: "publish_userId",
  name: "<i>this</i>.userId",
  locus: "Server",
  descr: ["로그인한 유저의 아이디. 로그인한 유저가 없으면 `null`"]
};

Template.api.subscribe = {
  id: "meteor_subscribe",
  name: "Meteor.subscribe(name [, arg1, arg2, ... ] [, onComplete])",
  locus: "Client",
  descr: ["레코드에 Subscribe하고 Subscription 핸들을 리턴한다. 핸들에는 Subscribe한 것을 중단하는 stop() 메소드가 있다."],
  args: [
    {name: "name",
     type: "String",
     descr: "Subscription의 이름. 서버에서 publish()를 호출할 때 사용하는 이름과 같아야 한다."},
    {name: "arg1, arg2, ...",
     type: "Any",
     descr: "옵션. 서버의 publish 함수에 넘겨지는 아규먼트."},
    {name: "onComplete",
     type: "Function",
     descr: "서버가 Subscription 처리를 완료했다고 알려주면 이 함수가 호출된다. 이 함수는 아규먼트가 없다."}
  ]
};

Template.api.autosubscribe = {
  id: "meteor_autosubscribe",
  name: "Meteor.autosubscribe(func)",
  locus: "Client",
  descr: ["자동으로 subscription을 연결하고 끊는다."],
  args: [
    {name: "func",
     type: "Function",
     descr: "[`Meteor.subscribe`](#meteor_subscribe)을 이용해 subscribe하는 [`Reactive`](#reactivity) 함수이다. 이 함수는 의존성이 변하면 자동으로 재실행된다."}
    ]
};

Template.api.methods = {
  id: "meteor_methods",
  name: "Meteor.methods(methods)",
  locus: "Anywhere",
  descr: ["클라이언트가 호출하는 Meteor 메소드를 정의한다."],
  args: [
    {name: "methods",
     type: "Object",
     descr: "키가 메소드의 이름이고 값이 함수인 딕셔너리"}
  ]
};

Template.api.method_invocation_userId = {  
  id: "method_userId",  
  name: "<i>this</i>.userId",  
  locus: "Anywhere",  
  descr: ["현재 메서드를 호출한 유저의 아이디. 로그인한 유저가 없으면 `null`."]  
};  
  
Template.api.method_invocation_setUserId = {  
  id: "method_setUserId",  
  name: "<i>this</i>.setUserId(userId)",  
  locus: "Server",  
  descr: ["로그인 유저를 설정한다."],  
  args: [  
    {name: "userId",  
     type: "String 또는 null",  
     descr: "이번 커넥션에서 `this.userId`에 들어갈 값."}  
  ]  
};  

Template.api.method_invocation_unblock = {
  id: "method_unblock",
  name: "<i>this</i>.unblock()",
  locus: "Server",
  descr: ["Meteor 메소드 안에서 호출한다. 다음 실행하는 메소드가 다른 fiber에서 실행되게 한다."]
};

Template.api.method_invocation_isSimulation = {
  id: "method_isSimulation",
  name: "<i>this</i>.isSimulation",
  locus: "Anywhere",
  descr: ["Meteor 메소드 안에서 호출한다. Stub이면 true를 리턴한다."]
};

Template.api.error = {
  id: "meteor_error",
  name: "new Meteor.Error(error, reason, details)",
  locus: "Anywhere",
  descr: ["Meteor 메소드가 던진 에러를 나타낸다."],
  args: [
    {name: "error",
     type: "Number",
     descr: "HTTP 코드 같은 에러 코드(eg, 404, 500)."},
    {name: "reason",
     type: "String",
     descr: "옵션. 'Not Found'같이 사람이 읽을 수 있는 에러 메시지."},
    {name: "details",
     type: "String",
     descr: "옵션. 에러에 대한 자세한 정보. 스택 트레이스 같은 게 들어 있다."}
  ]
};

Template.api.meteor_call = {
  id: "meteor_call",
  name: "Meteor.call(func, arg1, arg2, ... [, asyncCallback])",
  locus: "Anywhere",
  descr: ["Meteor 메소드를 호출한다."],
  args: [
    {name: "func",
     type: "String",
     descr: "Meteor 메소드 이름"},
    {name: "arg1, arg2, ...",
     type: "JSON",
     descr: "옵션. 메소드 아규먼트"},
    {name: "asyncCallback",
     type: "Function",
     descr: "옵션. 이 함수를 넘기면 meteor 메소드는 비동기로 동작한다. 정상적으로 끝나든 에러가 발생하든 이 콜백이 호출된다."}
  ]
};

Template.api.meteor_apply = {
  id: "meteor_apply",
  name: "Meteor.apply(name, params [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["아규먼트를 배열로 넘기면서 Meteor 메소드를 호출한다."],
  args: [
    {name: "name",
     type: "String",
     descr: "호출할 Meteor 메소드 이름"},
    {name: "params",
     type: "Array",
     descr: "메소드의 아규먼트"},
    {name: "asyncCallback",
     type: "Function",
     descr: "옵션. 이 함수를 넘기면 meteor 메소드는 비동기로 동작한다. 정상적으로 끝나든 에러가 발생하든 이 콜백이 호출된다."}
  ],
  options: [ 
    {name: "wait",
     type: "Boolean",
     descr: "(클라이언트에서만 적용됨) 이 값이 true이면 이 메서드가 완료될 때 까지 기다린다."
            + "이 메서드의 콜백 함수는 이전의 모든 메서드가 완료 되었을 때에 딱 한번만 호출된다."}
  ]
};

Template.api.status = {
  id: "meteor_status",
  name: "Meteor.status()",
  locus: "Client",
  descr: ["현재 연결 상태를 가져온다. 이 객체는 Reactive 데이터 소스이다."]
};

Template.api.reconnect = {
  id: "meteor_reconnect",
  name: "Meteor.reconnect()",
  locus: "Client",
  descr: [
    "서버에 접속하지 않은 상태면 바로 접속을 시도한다.",
    "이미 접속한 상태면 아무것도 하지 않는다."]
};

Template.api.connect = {
  id: "meteor_connect",
  name: "Meteor.connect(url)",
  locus: "Client",
  descr: ["다른 Meteor 서버에 접속한다. 다른 서버에 접속하면 Subscribe하거나 메소드를 호출할 수 있다."],
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
  name: "new Meteor.Collection(name, [options])",
  locus: "Anywhere",
  descr: ["컬렉션을 생성한다."],
  args: [
    {name: "name",
     type: "String",
     descr: "컬렉션의 이름. null이면 Unmanaged 로컬 컬렉션을 만든다."}
  ],
  options: [
    {name: "manager",
     type: "Object",
     descr: "해당 컬렉션을 관리하는 meteor 커넥션. null이면 기본 값인 `Meteor`가 사용된다. Unmanaged 컬렉션을 만들 때는 이 아규먼트를 사용할 수 없다."
    }
  ]
};

Template.api.find = {
  id: "find",
  name: "<em>collection</em>.find(selector, [options])",
  locus: "Anywhere",
  descr: ["컬렉션에서 셀렉터에 일치하는 도큐먼트를 찾는다."],
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
     descr: "정렬 순서 (기본값: 정렬하지 않음)"},
    {name: "skip",
     type: "Number",
     descr: "결과에서 건너뛰는 도큐먼트의 개수"},
    {name: "limit",
     type: "Number",
     descr: "리턴할 도큐먼트의 최대 개수"},
    {name: "fields",
     type: "Object: field 지정자",
     type_link: "fieldspecifiers",
     descr: "포함할지 말지 명시하는 필드 딕셔너리"},
    {name: "reactive",
     type: "Boolean",
     descr: "기본값은 true이다. false면 Reactive가 꺼진다."}
  ]
};

Template.api.findone = {
  id: "findone",
  name: "<em>collection</em>.findOne(selector, [options])",
  locus: "Anywhere",
  descr: ["옵션이 적용된 결과에서 첫 도큐먼트만 리턴한다."],
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
     descr: "정렬 순서 (기본값: 정렬하지 않음)"},
    {name: "skip",
     type: "Number",
     descr: "결과에서 건너뛰는 도큐먼트의 개수"},
    {name: "fields",
     type: "Object: field 지정자",
     type_link: "fieldspecifiers",
     descr: "포함할지 말지 명시하는 필드 딕셔너리"},
    {name: "reactive",
     type: "Boolean",
     descr: "기본값은 true이다. false면 Reactive가 꺼진다."}
  ]
};


Template.api.insert = {
  id: "insert",
  name: "<em>collection</em>.insert(doc, [callback])",
  locus: "Anywhere",
  descr: ["도큐먼트를 해당 컬렉션에 추가한다. 추가한 도큐먼트의 _id를 리턴한다."],
  args: [
    {name: "doc",
     type: "Object",
     descr: "추가할 도큐먼트. 추가할 도큐먼트에 _id 어트리뷰트가 없어야 한다."},
    {name: "callback",
     type: "Function",
     descr: "옵션. 이 콜백함수의 첫 아규먼트는 에러 객체이고 에러가 없으면 두 번째 아규먼트에 _id가 넘어온다."}
  ]
};

Template.api.update = {
  id: "update",
  name: "<em>collection</em>.update(selector, modifier, [options], [callback])",
  locus: "Anywhere",
  descr: ["컬렉션의 도큐먼트를 수정한다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "어떤 도큐먼트를 수정할지 명시한다."},
    {name: "modifier",
     type: "Object: Mongo modifier",
     type_link: "modifiers",
     descr: "도큐먼트를 어떻게 수정할지 명시한다."},
    {name: "callback",
     type: "Function",
     descr: "옵션. 에러가 나면 호출된다. 아규먼트로 에러 객체가 넘어간다."}
  ],
  options: [
    {name: "multi",
     type: "Boolean",
     descr: "모든 도큐먼트를 수정할 거면 true. 하나만 수정할 거면 false. 기본값은 false."}
  ]
};

Template.api.remove = {
  id: "remove",
  name: "<em>collection</em>.remove(selector, [callback])",
  locus: "Anywhere",
  descr: ["컬렉션의 도큐먼트를 삭제한다."],
  args: [
    {name: "selector",
     type: "Object: Mongo selector, or String",
     type_link: "selectors",
     descr: "삭제할 도큐먼트"},
    {name: "callback",
     type: "Function",
     descr: "옵션. 에러가 나면 호출된다."}
  ]
};

Template.api.allow = {  
  id: "allow",  
  name: "<em>collection</em>.allow(options)",  
  locus: "Server",  
  descr: ["사용자가 정의한 제한사항에 따라 유저가 클라이언트에서 이 컬렉션에 곧바로 쓰기 연산을 할 수 있게 허락한다."],  
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "데이터베이스의 데이터 수정 권한을 검사하는 함수. 만약 수정을 허락한다면 true를 리턴한다."},
    {name: "fetch",
     type: "Array of String",
     descr: "성능 향상을 위한 옵션. 검사를 위해 데이터베이스에서 `update`나 `remove`함수로 fetch할 필드를 제한한다."}
  ]
};

Template.api.deny = {
  id: "deny",
  name: "<em>collection</em>.deny(options)",
  locus: "Server",
  descr: ["`allow` 규칙을 덮어쓴다."],
  options: [
    {name: "insert, update, remove",
     type: "Function",
     descr: "데이터베이스의 데이터 수정 권한을 검사하는 함수. true를 리턴하면 다른 `allow`함수가 수정을 허락하더라도 수정을 허락하지 않는다."},
    {name: "fetch",
     type: "Array of Strings",
     descr: "성능 향상을 위한 옵션. 검사를 위해 데이터베이스에서 `update`나 `remove`함수로 fetch할 필드를 제한한다."}
  ]  
};  
  
Template.api.cursor_count = {
  id: "count",
  name: "<em>cursor</em>.count()",
  locus: "Anywhere",
  descr: ["쿼리에 만족하는 리턴된 도큐먼트의 개수를 리턴한다."]
};

Template.api.cursor_fetch = {
  id: "fetch",
  name: "<em>cursor</em>.fetch()",
  locus: "Anywhere",
  descr: ["일치하는 모든 도큐먼트를 배열로 리턴한다."]
};

Template.api.cursor_foreach = {
  id: "foreach",
  name: "<em>cursor</em>.forEach(callback)",
  locus: "Anywhere",
  descr: ["일치하는 도큐먼트마다 'callback' 함수를 동기적, 순차적으로 한 번씩 호출한다."],
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
  descr: ["매치하는 모든 도큐먼트에 맵 콜백을 적용시킨다. 결과를 배열로 리턴한다."],
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
  descr: ["커서를 리셋한다."],
  args: [ ]
};

Template.api.cursor_observe = {
  id: "observe",
  name: "<em>cursor</em>.observe(callbacks)",
  locus: "Anywhere",
  descr: ["쿼리를 지켜본다. 데이터가 변하면 호출할 콜백 함수를 아규먼트로 받는다."],
  args: [
    {name: "callbacks",
     type: "Object (added, changed, moved, removed 콜백 함수)",
     descr: "데이터가 변경되면 호출하는 함수"}
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
  descr: ["무효화 컨텍스트를 만든다. 무효화 컨텍스트는 특정 코드를 실행하고 의존성을 기록하는 데 쓰인다. 나중에 입력값이 바뀌면 해당 코드가 재실행된다.", "하나의 무효화 컨텍스트는 기본적으로 딱 한 번만 실행되는 콜백 함수의 모음이다. [`onInvalidate`](#oninvalidate) 메소드를 이용해 그 모음에 콜백 함수를 추가한다. [`invalidate`](#invalidate)는 이벤트를 발생시켜 콜백 함수를 실행한다."]
};

Template.api.run = {
  id: "run",
  name: "<em>context</em>.run(func)",
  locus: "Client",
  descr: ["컨텍스트 안에서 어떤 코드를 실행한다."],
  args: [
    {name: "func",
     type: "Function",
     descr: "실행할 코드"}
  ]
};

Template.api.on_invalidate = {
  id: "oninvalidate",
  name: "<em>context</em>.onInvalidate(callback)",
  locus: "Client",
  descr: ["해당 컨텍스트가 무효화 됐을 때 호출할 `callback`을 등록한다. `callback`는 정확히 한 번만 실행된다."],
  args: [
    {name: "callback",
     type: "Function",
     descr: "무효화되면 호출하는 함수. 해당 컨텍스트를 아규먼트로 받는다."}
  ]
};

Template.api.invalidate = {
  id: "invalidate",
  name: "<em>context</em>.invalidate()",
  locus: "Client",
  descr: ["해당 컨텍스트를 무효화 목록에 추가시킨다. 그래서 [`Meteor.flush`](#meteor_flush)가 호출되면 해당 컨텍스트의 [`onInvalidate`](#oninvalidate)` 콜백 함수들이 호출된다."]
};

Template.api.current = {
  id: "current",
  name: "Meteor.deps.Context.current",
  locus: "Client",
  descr: ["현재 [`무효화 컨텍스트`](#context). [`run`](#run) 함수 밖에서는 `null`이다."]
};

Template.api.autorun = {  
  id: "meteor_autorun",  
  name: "Meteor.autorun(func)",  
  locus: "Client",  
  descr: ["함수를 우선 실행시키고, 인자로 들어온 함수와 의존성 관계에 있는 것들이 변경되면 함수를 재실행 시킨다. func의 인자로는 stop메서드를 가지고 있는 핸들러가 들어온다. stop 메서드는 앞으로 이 함수를 재실행 하지 않도록 해준다."],  
  args: [  
    {name: "func",  
     type: "Function",  
     descr: "실행할 함수. `Meteor.autorun`이 리턴하는 핸들러와 같은 핸들러를 인자로 받는다."}  
  ]  
};

Template.api.flush = {
  id: "meteor_flush",
  name: "Meteor.flush()",
  locus: "Client",
  descr: ["무효화된 Reactive 컨텍스트를 즉시 업데이트한다. 화면에서 떼어진 DOM 엘레먼트가 있으면 삭제한다."]
};

// writeFence
// invalidationCrossbar

Template.api.render = {
  id: "meteor_render",
  name: "Meteor.render(htmlFunc)",
  locus: "Client",
  descr: ["데이터가 변경되면 자동으로 업데이트되는 DOM 노드를 만든다."],
  args: [
    {name: "htmlFunc",
     type: "HTML 스트링을 리턴하는 Function",
     descr: "렌더링할 HTML을 생성하는 함수. 호출하면 즉시 실행되고 데이터가 변경될 때마다 다시 실행된다. HTML을 리턴하는 함수 대신에 HTML 스트링을 넘겨도 된다."}
  ]
};

Template.api.renderList = {
  id: "meteor_renderlist",
  name: "Meteor.renderList(observable, docFunc, [elseFunc])",
  locus: "Client",
  descr: ["DB 쿼리 결과에 따라서 자동으로 업데이트하는 DOM 노드를 여러 개 생성한다."],
  args: [
    {name: "observable",
     type: "Cursor",
     type_link: "meteor_collection_cursor",
     descr: "정렬된 도큐먼트인 DB 쿼리 커서. Reactive 데이터 소스임 "},
    {name: "docFunc",
     type: "아규먼트로 도큐먼트를 하나 받고, HTML을 리턴하는 Function",
     descr: "각 도큐먼트를 아규먼트로 넣어 호출하는 렌더 함수"},
    {name: "elseFunc",
     type: "HTML을 리턴하는 Function",
     descr: "쿼리의 결과가 없을 때 호출되는 렌더 함수"}
  ],
  options: [
    {name: "events",
     type: "Object &mdash; event map",
     type_link: "eventmaps",
     descr: "화면에 그려지는 엘리먼트에 적용할 이벤트. 생략 가능"}
  ]
};

Template.api.eventmaps = {
  id: "eventmaps",
  name: "Event Maps"
};

Template.api.constant = {
  id: "constant",
  name: "Constant regions"
};

Template.api.isolate = {
  id: "isolate",
  name: "Reactivity isolation"
};

Template.api.user = {
  id: "meteor_user",
  name: "Meteor.user()",
  locus: "Anywhere but publish functions",
  descr: ["현재 유저의 레코드를 가져온다. 만약 로그인한 유저가 없으면 `null`을 리턴한다. reactive 데이터 소스이다."]
};


Template.api.userId = {
  id: "meteor_userid",
  name: "Meteor.userId()",
  locus: "Anywhere but publish functions",
  descr: ["현재 유저의 아이디를 가져온다. 로그인한 유저가 없으면 `null`을 리턴한다. reactive 데이터 소스이다."]
};


Template.api.users = {
  id: "meteor_users",
  name: "Meteor.users",
  locus: "Anywhere",
  descr: ["유저의 도큐먼트를 담고있는 [Meteor.Collection](#collections)이다."]
};

Template.api.userLoaded = {
  id: "meteor_userloaded",
  name: "Meteor.userLoaded()",
  locus: "Client",
  descr: ["현재 유저 도큐먼트가 [`Meteor.users`](#meteor_users)에 완전히 로드되었는지 확인하는데 사용한다. reactive 데이터 소스이다."]
};



Template.api.logout = {
  id: "meteor_logout",
  name: "Meteor.logout([callback])",
  locus: "Client",
  descr: ["유저를 로그아웃시킨다."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백이다. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ]
};


Template.api.loginWithPassword = {
  id: "meteor_loginwithpassword",
  name: "Meteor.loginWithPassword(user, password, [callback])",
  locus: "Client",
  descr: ["패스워드를 받아 로그인한다."],
  args: [
    {
      name: "user",
      type: "Object or String",
      descr: "유저 이름이나 이메일. 아니면 이름, 이메일, 아이디같은 하나의 키를 가진 오브젝트."
    },
    {
      name: "password",
      type: "String",
      descr: "유저의 패스워드. 이 정보는 평문으로 전송되지 __않는다__. [SRP](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol)를 이용해 통신한다."
    },
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ]
};


Template.api.loginWithExternalService = {
  id: "meteor_loginwithexternalservice",
  name: "Meteor.loginWith<i>ExternalService</i>([options], [callback])",
  locus: "Client",
  descr: ["외부 서비스를 이용해 로그인한다."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ],
  options: [
    {
      name: "requestPermissions",
      type: "Array of Strings",
      descr: "유저가 요구하는 퍼미션의 리스트."
    }
  ]
};



Template.api.accounts_config = {
  id: "accounts_config",
  name: "Accounts.config(options)",
  locus: "Anywhere",
  descr: ["전역 계정 옵션을 세팅한다."],
  options: [
    {
      name: "sendVerificationEmail",
      type: "Boolean",
      descr: "새로운 유저를 만들때 이메일을 입력 받았다면 확인 이메일을 받도록 한다."
    },
    {
      name: "forbidClientAccountCreation",
      type: "Boolean",
      descr: "클라이언트에서의 [`createUser`](#accounts_createuser) 호출을 금지한다."
    }
  ]
};

Template.api.accounts_ui_config = {
  id: "accounts_ui_config",
  name: "Accounts.ui.config(options)",
  locus: "Client",
  descr: ["[`{{loginButtons}}`](#accountsui)의 동작을 설정한다."],
  options: [
    {
      name: "requestPermissions",
      type: "Object",
      descr: "유저가 각 외부 서비스로 요청할 [permissions](#requestpermissions)들."
    },
    {
      name: "passwordSignupFields",
      type: "String",
      descr: "유저 생성 폼에서 보여줄 필드. '`USERNAME_AND_EMAIL`'나 '`USERNAME_AND_OPTIONAL_EMAIL`', '`USERNAME_ONLY`', '`EMAIL_ONLY`'(기본값) 중 하나다."
    }
  ]
};

Template.api.accounts_validateNewUser = {
  id: "accounts_validatenewuser",
  name: "Accounts.validateNewUser(func)",
  locus: "Server",
  descr: ["새로운 유저를 만들 때의 제한사항을 세팅한다."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "새로운 유저를 생성할 때 마다 호출된다. 아규먼트로 새로운 유저 객체가 들어온다. 이 유저를 생성하고자 하면 true를, 거부하고자 하면 false를 리턴한다."
    }
  ]
};

Template.api.accounts_onCreateUser = {
  id: "accounts_oncreateuser",
  name: "Accounts.onCreateUser(func)",
  locus: "Server",
  descr: ["새 유저 생성을 커스터마이징한다."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "새로운 유저를 생성할 때 마다 호출된다. 새로운 유저 객체를 리턴한다. 만약 유저 생성에 실패하면 `Error`를 던진다."
    }
  ]
};



Template.api.accounts_createUser = {
  id: "accounts_createuser",
  name: "Accounts.createUser(options, [callback])",
  locus: "Anywhere",
  descr: ["새 유저를 만든다."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "클라이언트에서만 사용하는 선택적 콜백이다. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ],
  options: [
    {
      name: "username",
      type: "String",
      descr: "이 유저의 유니크한 이름."
    },
    {
      name: "email",
      type: "String",
      descr: "유저의 이메일 주소."
    },
    {
      name: "password",
      type: "String",
      descr: "유저의 패스워드. 평문형태로 전송하지 __않는다__."
    },
    {
      name: "profile",
      type: "Object",
      descr: "일반적으로 `name`필드등이 있는 유저의 프로필."
    }
  ]
};

Template.api.accounts_changePassword = {
  id: "accounts_changepassword",
  name: "Accounts.changePassword(oldPassword, newPassword, [callback])",
  locus: "Client",
  descr: ["현재 유저의 패스워드를 변경한다. 반드시 로그인 되어있어야 한다."],
  args: [
    {
      name: "oldPassword",
      type: "String",
      descr: "유저의 현재 패스워드. 평문형태로 전송하지 __않는다__."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "유저의 새로운 패스워드. 평문형태로 전송하지 __않는다__."
    },
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ]
};

Template.api.accounts_forgotPassword = {
  id: "accounts_forgotpassword",
  name: "Accounts.forgotPassword(options, [callback])",
  locus: "Client",
  descr: ["잊어버린 패스워드를 이메일로 보내달라고 요청한다."],
  args: [
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ],
  options: [
    {
      name: "email",
      type: "String",
      descr: "패스워드 리셋 링크를 받을 이메일 주소."
    }
  ]
};

Template.api.accounts_resetPassword = {
  id: "accounts_resetpassword",
  name: "Accounts.resetPassword(token, newPassword, [callback])",
  locus: "Client",
  descr: ["이메일을 통해 전달받은 토큰으로 한 유저의 패스워드를 리셋한다. 유저는 그 이후에 로그인 한다."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "패스워드 리셋 URL로 부터 가져온 토큰."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "유저의 새로운 패스워드. 평문형태로 전송되지 __않는다__."
    },
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ],
};

Template.api.accounts_setPassword = {
  id: "accounts_setpassword",
  name: "Accounts.setPassword(userId, newPassword)",
  locus: "Server",
  descr: ["사용자의 패스워드를 강제로 바꾼다."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "패스워드를 바꿀 유저의 아이디."
    },
    {
      name: "newPassword",
      type: "String",
      descr: "유저의 새 패스워드."
    }
  ]
};

Template.api.accounts_verifyEmail = {
  id: "accounts_verifyemail",
  name: "Accounts.verifyEmail(token, [callback])",
  locus: "Client",
  descr: ["유저의 이메일을 '확인되었음'이라고 표시한다. 유저는 그 후에 로그인 한다."],
  args: [
    {
      name: "token",
      type: "String",
      descr: "확인용 URL로 부터 가져온 토큰."
    },
    {
      name: "callback",
      type: "Function",
      descr: "선택적으로 사용하는 콜백. 성공하면 아규먼트없이 콜백함수가 호출된다. 실패하면 `Error` 아규먼트 하나를 넘겨받아 호출된다."
    }
  ]
};


Template.api.accounts_sendResetPasswordEmail = {
  id: "accounts_sendresetpasswordemail",
  name: "Accounts.sendResetPasswordEmail(userId, [email])",
  locus: "Server",
  descr: ["패스워드를 변경시킬 수 있는 링크를 이메일로 보낸다."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "이메일을 보낼 유저의 아이디."    
    },
    {
      name: "email",
      type: "String",
      descr: "선택적. 유저의 이메일중 메일을 보낼 이메일 주소. 이 주소는 반드시 유저의 `emails`리스트에 있어야 한다. 리스트의 제일 첫번째 이메일을 기본값으로 사용한다."
    }
  ]
};

Template.api.accounts_sendEnrollmentEmail = {
  id: "accounts_sendenrollmentemail",
  name: "Accounts.sendEnrollmentEmail(userId, [email])",
  locus: "Server",
  descr: ["초기화된 패스워드를 사용할 수 있는 링크를 이메일로 보낸다."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "이메일을 보낼 유저의 아이디"
    },
    {
      name: "email",
      type: "String",
      descr: "선택적. 유저의 이메일중 메일을 보낼 이메일 주소. 이 주소는 반드시 유저의 `emails`리스트에 있어야 한다. 리스트의 제일 첫번째 이메일을 기본값으로 사용한다."
    }
  ]
};

Template.api.accounts_sendVerificationEmail = {
  id: "accounts_sendverificationemail",
  name: "Accounts.sendVerificationEmail(userId, [email])",
  locus: "Server",
  descr: ["이메일 주소 확인용 링크를 이메일로 보낸다."],
  args: [
    {
      name: "userId",
      type: "String",
      descr: "이메일을 보낼 유저의 아이디"
    },
    {
      name: "email",
      type: "String",
      descr: "선택적. 유저의 이메일중 메일을 보낼 이메일 주소. 이 주소는 반드시 유저의 `emails`리스트에 있어야 한다. 확인되지 않은 이메일 리스트 제일 첫번째 이메일을 기본값으로 사용한다."
    }
  ]
};

Template.api.accounts_emailTemplates = {
  id: "accounts_emailtemplates",
  name: "Accounts.emailTemplates",
  locus: "Anywhere",
  descr: ["계정 시스템에서 보내는 이메일을 커스터마이징 하는 옵션."]
};

Template.api.setTimeout = {
  id: "meteor_settimeout",
  name: "Meteor.setTimeout",
  locus: "Anywhere",
  descr: ["일정 시간 동안 기다리고 나서 함수를 호출한다."],
  args: [
    {
      name: "func",
      type: "Function",
      descr: "실행할 함수"
    },
    {
      name: "delay",
      type: "Number",
      descr: "함수 호출하려고 기다리는 시간. 밀리초 단위"
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
      descr: "실행할 함수."
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
  descr: ["`Meteor.setTimeout`로 시작한 호출 스케쥴링을 중지한다."],
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
  descr: ["`Meteor.setInterval`로 시작한 반복 호출 스케쥴링을 중지한다."],
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
  descr: ["EnvironmentVariable의 현재 값을 리턴한다."]
};

Template.api.environmentVariable_withValue = {
  id: "env_var_withvalue",
  name: "<i>env_var</i>.withValue(value, func)",
  locus: "Anywhere",
  descr: ["`value`를 `env_var`에 할당하고 `func`를 실행한다."],
  args: [
    {name: "value",
     type: "Anything",
     descr: "환경 변수의 값"},
    {name: "func",
     type: "Function",
     descr: "호출할 함수"}
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
  descr: ["세션에 변수를 넣는다. 변수의 값이 변하면 그 사실이 리스너에 통보된다. (예: 해당 `key`에 대해서 [`Session.get`](#session_get)이 호출되고 팀플릿이 다시 그려진다. 즉, [`Meteor.autosubscribe`](#meteor_autosubscribe) 블럭 재실행이 일어난다."],
  args: [
    {name: "key",
     type: "String",
     descr: "값을 넣을 세션 변수의 이름. 예를 들자면, `selectedItem`"},
    {name: "value",
     type: "JSON-able object or undefined",
     descr: "`key`의 새로운 값."}
  ]
};

Template.api.get = {
  id: "session_get",
  name: "Session.get(key)",
  locus: "Client",
  descr: ["세션 변수 값을 가져온다. [`Meteor.deps`](#meteor_deps) 안에서는 [`Session.set`](#session_set)으로 세션 변수를 변경하면 그 컨텍스트가 무효화된다. 이 메서드는 세션 값의 복사본을 리턴한다. 따라서 만약 그 값이 객체나 배열이라면 리턴된 값을 수정하는 것은 세션의 값에는 아무런 영향을 미치지 않는다."],
  args: [
    {name: "key",
     type: "String",
     descr: "세션 변수의 이름"}
  ]
};

Template.api.equals = {
  id: "session_equals",
  name: "Session.equals(key, value)",
  locus: "Client",
  descr: ["세션 변수의 값과 value`가 같은지 비교한다. [`Meteor.deps`](#meteor_deps) 안에서는 세션 변수를 변경하면 컨텍스트가 무효화된다."],
  args: [
    {name: "key",
     type: "String",
     descr: "세션 변수의 이름"},
    {name: "value",
     type: "String, Number, Boolean, null, undefined",
     descr: "비교할 값"}
  ]
};

Template.api.httpcall = {
  id: "meteor_http_call",
  name: "Meteor.http.call(method, url [, options] [, asyncCallback])",
  locus: "Anywhere",
  descr: ["HTTP 요청을 보낸다."],
  args: [
    {name: "method",
     type: "String",
     descr: '사용할 HTTP 메소드. "`GET`", "`POST`", "`PUT`", "`DELETE`"를 사용할 수 있다.'},
    {name: "url",
     type: "String",
     descr: '전송할 URL 주소'},
    {name: "asyncCallback",
     type: "Function",
     descr: "옵션. 이 콜백 함수를 넘기면 메소드는 비동기로 동작하고 asyncCallback가 호출된다. 클라이언트에서는 이 함수를 생략할 수 없다."
    }
  ],
  options: [
    {name: "content",
     type: "String",
     descr: "HTTP 요청의 body로 쓰일 스트링."
},
    {name: "data",
     type: "Object",
     descr: "JSON 스트링로 표현 가능한 객체. HTTP 요청의 body로 사용된다. `content`를 덮어쓴다."},
    {name: "query",
     type: "String",
     descr: "URL에 추가될 쿼리 스트링. `url`의 쿼리 부분을 완전히 덮어쓴다."},
    {name: "params",
     type: "Object",
     descr: "요청 파라미터의 딕셔너리. 인코딩돼서 URL이나(GET방식) 요청의 body에(PUT방식) 들어간다. `content`나 `data` 아규먼트가 있으면 `params`는 반드시 URL에 들어간다."
    },
    {name: "auth",
     type: "String",
     descr: '`"사용자이름:패스워드"` 형식의  HTTP basic authentication 스트링'},
    {name: "headers",
     type: "Object",
     descr: "HTTP 요청에 추가할 헤더를 스트링 형태로 저장한 딕셔너리."},
    {name: "timeout",
     type: "Number",
     descr: "요청을 기다리는 최대 시간(밀리초). timeout은 기본값이 없다."},
    {name: "followRedirects",
     type: "Boolean",
     descr: "만약 true면 투명하게 HTTP 리다이렉션을 수행한다. 클라이언트에서는 false로 설정할 수 없다."}
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
  descr: ["HTTP DELETE 요청을 보낸다. `Meteor.http.call(\"DELETE\", ...)`과 같다. (JavaScript의 `delete` 키워드와 충돌을 피하고자 `del`이라는 이름을 사용했다.)"]
};

// XXX move these up to right place
Template.api.template_call = {
  id: "template_call",
  name: "Template.<em>myTemplate</em>([data])",
  locus: "Client",
  descr: ["HTML을 생성하는 템플릿 함수를 호출한다."],
  args: [
    {name: "data",
     type: "Object",
     descr: "데이터 컨텍스트 객체. 템플릿에서 사용한다."}
  ]
};

Template.api.template_rendered = {
  id: "template_rendered",
  name: "Template.<em>myTemplate</em>.rendered = function ( ) { ... }",
  locus: "Client",
  descr: ["템플릿 인스턴스가 렌더될 때 호출되는 콜백 함수."]
};

Template.api.template_created = {
  id: "template_created",
  name: "Template.<em>myTemplate</em>.created = function ( ) { ... }",
  locus: "Client",
  descr: ["템플릿 인스턴스가 생성될 때 호출되는 콜백 함수."]
};

Template.api.template_destroyed = {
  id: "template_destroyed",
  name: "Template.<em>myTemplate</em>.destroyed = function ( ) { ... }",
  locus: "Client",
  descr: ["템플릿 인스턴스를 해제할(destroy) 때 호출되는 콜백 함수."]
};

Template.api.template_events = {
  id: "template_events",
  name: "Template.<em>myTemplate</em>.events(eventMap)",
  locus: "Client",
  descr: ["이벤트 핸들러를 등록한다"],
  args: [
    {name: "eventMap",
     type: "Object: event map",
     type_link: "eventmaps",
     descr: "이 템플릿에 연결할 이벤트 핸들러."}
  ]
};

Template.api.template_helpers = {
  id: "template_helpers",
  name: "Template.<em>myTemplate</em>.helpers(helpers)",
  locus: "Client",
  descr: ["템플릿 헬퍼를 등록한다."],
  args: [
    {name: "helpers",
     type: "Object",
     descr: "헬퍼 함수가 있는 딕셔너리"}
  ]
};

Template.api.template_preserve = {
  id: "template_preserve",
  name: "Template.<em>myTemplate</em>.preserve(selectors)",
  locus: "Client",
  descr: ["다시 렌더링 될 때 어떤 DOM 엘리먼트를 유지할지(preserve) 명시한다."],
  args: [
    {name: "selectors",
     type: "Array or Object",
     descr: "`['.thing1', '.thing2']`처럼 딱 한 엘리먼트에 매치하는 셀렉터를 배열로 넘긴다. 셀렉터와 labeling 함수를 딕셔너리 형태로 넘기는 방법도 있다."}
  ]
};

Template.api.template_findAll = {
  id: "template_findAll",
  name: "<em>this</em>.findAll(selector)",
  locus: "Client",
  descr: ["템플릿 인스턴스에서 `selector`에 매치하는 엘리먼트를 찾는다."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'CSS 셀렉터. 해당 템플릿 인스턴스에서만 적용된다.'}
  ]
};

Template.api.template_find = {
  id: "template_find",
  name: "<em>this</em>.find(selector)",
  locus: "Client",
  descr: ["템플릿 인스턴스에서 `selector`에 매치하는 엘리먼트를 딱 하나 찾는다."],
  args: [
    {name: "selector",
     type: "String",
     descr: 'CSS 셀렉터. 해당 템플릿 인스턴스에서만 적용된다.'}
  ]
};

Template.api.template_firstNode = {
  id: "template_firstNode",
  name: "<em>this</em>.firstNode",
  locus: "Client",
  descr: ["템플릿 인스턴스의 첫 DOM 노드. 최상위(top-level) 노드임."]
};

Template.api.template_lastNode = {
  id: "template_lastNode",
  name: "<em>this</em>.lastNode",
  locus: "Client",
  descr: ["템플릿 인스턴스의 마지막 DOM 노드. 최상위(top-level) 노드임."]
};

Template.api.template_data = {
  id: "template_data",
  name: "<em>this</em>.data",
  locus: "Client",
  descr: ["템플릿 인스턴스를 가장 나중에 실행했을 때의 데이터 컨텍스트."]
};


var rfc = function (descr) {
  return '[RFC5322](http://tools.ietf.org/html/rfc5322) ' + descr;
};

Template.api.email_send = {
  id: "email_send",
  name: "Email.send(options)",
  locus: "Server",
  descr: ["email을 보낸다. 메일 서버로의 접속에 실패하거나 메일 서버가 에러를 리턴하면 `Error`를 던진다."],
  options: [
    {name: "from",
     type: "String",
     descr: rfc('"From:" 주소 (필수)')
    },
    {name: "to",
     type: "String or Array of strings",
     descr: rfc('"To:" 주소[들]')
    },
    {name: "cc",
     type: "String or Array of strings",
     descr: rfc('"Cc:" 주소[들]')
    },
    {name: "bcc",
     type: "String or Array of strings",
     descr: rfc('"Bcc:" 주소[들]')
    },
    {name: "replyTo",
     type: "String or Array of strings",
     descr: rfc('"Reply-To:" 주소[들]')
    },
    {name: "subject",
     type: "String",
     descr: rfc('"Subject:" 줄')
    },
    {name: "text",
     type: "String",
     descr: rfc('메일 내용 (일반 텍스트)')
    },
    {name: "html",
     type: "String",
     descr: rfc('메일 내용 (HTML)')
    }
  ]
};
