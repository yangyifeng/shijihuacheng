$(function ($) {
  $(".btn-danger").confirm({
        text: "删除后将无法恢复，请谨慎操作",
        title: "确认删除？",
        confirmButton: "确认",
        cancelButton: "取消",
        confirmButtonClass: "btn-danger",
        cancelButtonClass: "btn-default",
        dialogClass: "modal-dialog modal-lg" // Bootstrap classes for large modal
    });
});