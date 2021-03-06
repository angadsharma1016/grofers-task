define({ "api": [
  {
    "type": "post",
    "url": "/delete",
    "title": "delete values",
    "name": "delete_values",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>key of the value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n\t\"key\":\"dsad\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/delete.go",
    "groupTitle": "all"
  },
  {
    "type": "get",
    "url": "/",
    "title": "get all values",
    "name": "get_all_values",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>key of the value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"key\": \"dsad\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "\n[\n   {\n       \"key\": \"adsad\",\n       \"value\": \"adjhsbdbaa\"\n   },\n   {\n       \"key\": \"angad\",\n       \"value\": \"sharmazasd\"\n   },\n   {\n       \"key\": \"angadsd\",\n       \"value\": \"sharma\"\n   },\n   {\n       \"key\": \"da\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"dasdsaasddasda\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"dasdsaasddasdasad\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"dsaasddasda\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"dsadasda\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"hip\",\n       \"value\": \"hop\"\n   },\n   {\n       \"key\": \"k2\",\n       \"value\": \"v2\"\n   },\n   {\n       \"key\": \"my\",\n       \"value\": \"name\"\n   },\n   {\n       \"key\": \"name\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"name1\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"name3\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"name4\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"name5\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"name7\",\n       \"value\": \"angad\"\n   },\n   {\n       \"key\": \"new\",\n       \"value\": \"name\"\n   },\n   {\n       \"key\": \"ping\",\n       \"value\": \"pong\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/get.go",
    "groupTitle": "all"
  },
  {
    "type": "post",
    "url": "/get",
    "title": "get values",
    "name": "get_values",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>key of the value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"key\": \"dsad\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/get.go",
    "groupTitle": "all"
  },
  {
    "type": "post",
    "url": "/put",
    "title": "put values",
    "name": "put_values",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>key of the value</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/put.go",
    "groupTitle": "all"
  },
  {
    "type": "post",
    "url": "/update",
    "title": "update values",
    "name": "update_values",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "key",
            "description": "<p>key of the value</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "value",
            "description": "<p>new value of the key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        },
        {
          "title": "response-example",
          "content": "{\n   \"key\": \"dsad\",\n   \"value\": \"ddd\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controller/update.go",
    "groupTitle": "all"
  }
] });
