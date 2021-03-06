module.exports = {
  "errno": 0,
  "data": {
    "total": 8,
    "totalPage": 1,
    "page": 1,
    "list": [
      {
        "id": "10",
        "name": "删除权限",
        "url": "/api/rbac-permission-delete",
        "type": "1",
        "permission": "Service_Page_Api_RbacPermissionDelete",
        "method": "POST",
        "sort": "0",
        "parent_id": "7"
      },
      {
        "id": "9",
        "name": "添加权限",
        "url": "api/api/rbac-permission-add",
        "type": "1",
        "permission": "Service_Page_Api_RbacPermissionAdd",
        "method": "POST",
        "sort": "0",
        "parent_id": "7"
      },
      {
        "id": "8",
        "name": "编辑权限",
        "url": "api/api/rbac-permission-update",
        "type": "1",
        "permission": "Service_Page_Api_RbacPermissionUpdate",
        "method": "POST",
        "sort": "0",
        "parent_id": "0"
      },
      {
        "id": "7",
        "name": "权限管理",
        "url": "api/api/rbac-permission-*",
        "type": "1",
        "permission": "Service_Page_Api_RbacPermission",
        "method": "*",
        "sort": "0",
        "parent_id": "0"
      },
      {
        "id": "4",
        "name": "监控在线用户页面",
        "url": "/monitor",
        "type": "1",
        "permission": "page:monitor:online",
        "method": null,
        "sort": "2",
        "parent_id": "0"
      },
      {
        "id": "3",
        "name": "测试页面-添加",
        "url": "/**/test",
        "type": "2",
        "permission": "btn:test:insert",
        "method": "POST",
        "sort": "2",
        "parent_id": "1"
      },
      {
        "id": "2",
        "name": "测试页面-查询",
        "url": "/**/test",
        "type": "2",
        "permission": "btn:test:query",
        "method": "GET",
        "sort": "1",
        "parent_id": "1"
      },
      {
        "id": "1",
        "name": "用户管理",
        "url": "api/api/rbac-user-*",
        "type": "1",
        "permission": "Service_Page_Api_RbacUser",
        "method": "*",
        "sort": "1",
        "parent_id": "0"
      }
    ]
  }
}
