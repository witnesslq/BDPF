<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<form class="form-inline" id="edit-comp-form">
<div class="et-manage-content" style="margin-left:0px;">
			<p class="et-manage-title">
				<span>修改权限</span>
			</p>
			<div class="et-teachingPlan-content">
				<input type="hidden" id="Id" name="Id" value="${comp.id }" />
					<div class="form-group">
						<label>权限名称</label>
						<input type="text" class="form-control name" id="name" name="name" value="${comp.name }"  placeholder="1~50个字符">
					</div>
					<div class="form-group">
						<label>权限描述</label>
						<input type="text" class="form-control description" id="description" value="${comp.description }"  placeholder="1~100个字符">
					</div>
					<div class="form-group">
						<label>权限代码</label>
						<input type="text" class="form-control code" id="resCode" name="resCode"  placeholder="1~25个字符,只可使用小写字母" value="${comp.resCode }">
					</div>
					<div class="form-group">
						<label>URL地址</label>
						<input type="text" class="form-control mapping" id="reqMapping" name="reqMapping"  placeholder="1~100个字符,可使用字母、斜杠" value="${comp.reqMapping }">
					</div>
					<div class="form-group">
						<label>父<i style="margin-left: 0.5em;"></i>及<i style="margin-left: 0.5em;"></i>弟</label>
						<input type="text" class="form-control" id="parentId" name="parentId"  placeholder="1~25个字符,只可使用小写字母" value="${comp.parentId }">
					</div>
					<div class="tac">
						<input id="btn-save" name="btn-save" type="submit" class="btn affirm-btn mr40" value="修改" />
						<input id="btn-cancel" name="btn-cancel" type="button" class="btn cancel-btn" value="取消" />
					</div>
			</div>
		</div>
	</form>