Template.pkg_absolute_url.absoluteUrl = {
  id: "meteor_absoluteUrl",
  name: "Meteor.absoluteUrl([path], [options])",
  locus: "Anywhere",
  descr: ["애플리케이션의 절대 URL을 생성한다."],
  args: [
    {name: "path",
     type: "String",
     descr: '루트 URL에 더해질 경로. 앞의 "`/`"는 빼야 한다.'
    }
  ],
  options: [
    {name: "secure",
     type: "Boolean",
     descr: "HTTPS URL을 생성한다."
    },
    {name: "rootUrl",
     type: "String",
     descr: "기본 값인 서버 환경 변수 ROOT_URL을 오버라이드 한다. 예: \"`http://foo.example.com`\""
    }
  ]

};

