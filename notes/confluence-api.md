# Getting Comments from Confluence REST API

## Getting the Context

Base URL from JS

```javascript
AJS.params.baseUrl
```

Current page ID from JS:

```javascript
context.context.contentId
```

To get comments for a page (including inline and footer):

```url
[base-url]/rest/api/content/[page-id]/child/comment?expand=extensions.resolution%2Cextension.inlineProperties%2Cbody.view%2Chistory
```

Result:

```JSON
{
    "results": [
        {
            "id": "70844873",
            "type": "comment",
            "status": "current",
            "title": "Re: Technical Strategy: Application Architecture [DRAFT]",
            "history": {
                "latest": true,
                "createdBy": {
                    "type": "known",
                    "username": "5c9cec5161e6f7fb71a9c864fb02df6d",
                    "userKey": "8a7f808869dfe7a80169e2b24afc01f8",
                    "accountId": "5ca46c14e935e80e41c3c3f0",
                    "accountType": "atlassian",
                    "email": "andy.nash@muddyboots.com",
                    "publicName": "Andy Nash",
                    "profilePicture": {
                        "path": "/wiki/aa-avatar/5ca46c14e935e80e41c3c3f0",
                        "width": 48,
                        "height": 48,
                        "isDefault": false
                    },
                    "displayName": "Andy Nash",
                    "_expandable": {
                        "operations": "",
                        "details": "",
                        "personalSpace": ""
                    },
                    "_links": {
                        "self": "https://mbs.atlassian.net/wiki/rest/api/user?accountId=5ca46c14e935e80e41c3c3f0"
                    }
                },
                "createdDate": "2019-05-15T12:56:48.559Z",
                "_expandable": {
                    "lastUpdated": "",
                    "previousVersion": "",
                    "contributors": "",
                    "nextVersion": ""
                },
                "_links": {
                    "self": "https://mbs.atlassian.net/wiki/rest/api/content/70844873/history"
                }
            },
            "macroRenderedOutput": {},
            "body": {
                "view": {
                    "value": "<p>Do we need to confirm which data entities we are and are not aligning as part of this high priority item?</p>",
                    "representation": "view",
                    "_expandable": {
                        "webresource": "",
                        "embeddedContent": "",
                        "mediaToken": "",
                        "content": "/rest/api/content/70844873"
                    }
                },
                "_expandable": {
                    "editor": "",
                    "atlas_doc_format": "",
                    "export_view": "",
                    "styled_view": "",
                    "storage": "",
                    "editor2": "",
                    "anonymous_export_view": ""
                }
            },
            "extensions": {
                "location": "inline",
                "inlineProperties": {
                    "originalSelection": "Align data entities across applications for reporting and operational purposes",
                    "markerRef": "fe270818-cc99-4312-8d83-49ffe6713bf9"
                },
                "resolution": {
                    "status": "open",
                    "lastModifier": {
                        "type": "anonymous",
                        "profilePicture": {
                            "path": "/wiki/s/721985890/6452/e8d4ac27efc4d3f6b40c2305f7e5a6a8ec282012/_/images/icons/profilepics/anonymous.png",
                            "width": 48,
                            "height": 48,
                            "isDefault": true
                        },
                        "displayName": "Anonymous",
                        "_expandable": {
                            "operations": ""
                        }
                    },
                    "lastModifiedDate": "1970-01-01T00:00:00.000Z"
                }
            },
            "_expandable": {
                "childTypes": "",
                "container": "/rest/api/content/67567812",
                "metadata": "",
                "operations": "",
                "children": "/rest/api/content/70844873/child",
                "restrictions": "/rest/api/content/70844873/restriction/byOperation",
                "ancestors": "",
                "version": "",
                "descendants": "/rest/api/content/70844873/descendant",
                "space": "/rest/api/space/TDA"
            },
            "_links": {
                "webui": "/spaces/TDA/pages/67567812?focusedCommentId=70844873#comment-70844873",
                "self": "https://mbs.atlassian.net/wiki/rest/api/content/70844873"
            }
        },
        {
            "id": "73662485",
            "type": "comment",
            "status": "current",
            "title": "Re: Technical Strategy: Application Architecture [DRAFT]",
            "history": {
                "latest": true,
                "createdBy": {
                    "type": "known",
                    "username": "5cdc1d3600d9750e45e21973",
                    "userKey": "8a7f808a6ab781a6016abbd24e5c02de",
                    "accountId": "5cdc1d3600d9750e45e21973",
                    "accountType": "atlassian",
                    "email": "shaun.blackmore@muddyboots.com",
                    "publicName": "Shaun Blackmore",
                    "profilePicture": {
                        "path": "/wiki/aa-avatar/5cdc1d3600d9750e45e21973",
                        "width": 48,
                        "height": 48,
                        "isDefault": false
                    },
                    "displayName": "Shaun Blackmore",
                    "_expandable": {
                        "operations": "",
                        "details": "",
                        "personalSpace": ""
                    },
                    "_links": {
                        "self": "https://mbs.atlassian.net/wiki/rest/api/user?accountId=5cdc1d3600d9750e45e21973"
                    }
                },
                "createdDate": "2019-05-22T08:44:00.769Z",
                "_expandable": {
                    "lastUpdated": "",
                    "previousVersion": "",
                    "contributors": "",
                    "nextVersion": ""
                },
                "_links": {
                    "self": "https://mbs.atlassian.net/wiki/rest/api/content/73662485/history"
                }
            },
            "macroRenderedOutput": {},
            "body": {
                "view": {
                    "value": "<p>Likewise, a variety of data access methods to data entities exist across products.</p><p>I feel that any method of populating data entities across applications, as well as how they are to be queried should also be considered part of the Application Architecture scope.</p>",
                    "representation": "view",
                    "_expandable": {
                        "webresource": "",
                        "embeddedContent": "",
                        "mediaToken": "",
                        "content": "/rest/api/content/73662485"
                    }
                },
                "_expandable": {
                    "editor": "",
                    "atlas_doc_format": "",
                    "export_view": "",
                    "styled_view": "",
                    "storage": "",
                    "editor2": "",
                    "anonymous_export_view": ""
                }
            },
            "extensions": {
                "location": "footer",
                "resolution": {
                    "status": "open",
                    "lastModifier": {
                        "type": "anonymous",
                        "profilePicture": {
                            "path": "/wiki/s/721985890/6452/e8d4ac27efc4d3f6b40c2305f7e5a6a8ec282012/_/images/icons/profilepics/anonymous.png",
                            "width": 48,
                            "height": 48,
                            "isDefault": true
                        },
                        "displayName": "Anonymous",
                        "_expandable": {
                            "operations": ""
                        }
                    },
                    "lastModifiedDate": "1970-01-01T00:00:00.000Z"
                }
            },
            "_expandable": {
                "childTypes": "",
                "container": "/rest/api/content/67567812",
                "metadata": "",
                "operations": "",
                "children": "/rest/api/content/73662485/child",
                "restrictions": "/rest/api/content/73662485/restriction/byOperation",
                "ancestors": "",
                "version": "",
                "descendants": "/rest/api/content/73662485/descendant",
                "space": "/rest/api/space/TDA"
            },
            "_links": {
                "webui": "/spaces/TDA/pages/67567812?focusedCommentId=73662485#comment-73662485",
                "self": "https://mbs.atlassian.net/wiki/rest/api/content/73662485"
            }
        }
    ],
    "start": 0,
    "limit": 25,
    "size": 2,
    "_links": {
        "base": "https://mbs.atlassian.net/wiki",
        "context": "/wiki",
        "self": "https://mbs.atlassian.net/wiki/rest/api/content/67567812/child/comment?expand=extensions.resolution%2Cbody.view%2Chistory%2Cextensions.inlineProperties"
    }
}
```

Filter only the comments where `extensions.location=='inline'` and `extensions.resolution.status == 'open'`

Content is in `body.view.value`
