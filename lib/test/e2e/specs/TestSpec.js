"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var src_1 = require("../../../src");
var protractor_1 = require("protractor");
var ChatForm = (function (_super) {
    __extends(ChatForm, _super);
    function ChatForm() {
        return _super.apply(this, arguments) || this;
    }
    ChatForm.prototype.sendMessage = function (message) {
        this.message.type(message);
        this.sendAction.click();
    };
    return ChatForm;
}(src_1.Component));
__decorate([
    src_1.field(src_1.Component, { qa: "message" }),
    __metadata("design:type", src_1.Component)
], ChatForm.prototype, "message", void 0);
__decorate([
    src_1.field(src_1.Component, { css: "#sendMessage" }),
    __metadata("design:type", src_1.Component)
], ChatForm.prototype, "sendAction", void 0);
__decorate([
    src_1.field(src_1.Component, { css: "#missingAction" }),
    __metadata("design:type", src_1.Component)
], ChatForm.prototype, "missingAction", void 0);
ChatForm = __decorate([
    src_1.defaults({ qa: "chat-form" }),
    __metadata("design:paramtypes", [])
], ChatForm);
var UserForm = (function (_super) {
    __extends(UserForm, _super);
    function UserForm() {
        return _super.apply(this, arguments) || this;
    }
    UserForm.prototype.login = function (name) {
        this.username.type(name);
        this.sendAction.click();
    };
    return UserForm;
}(src_1.Component));
__decorate([
    src_1.field(src_1.Component, { qa: "username" }),
    __metadata("design:type", src_1.Component)
], UserForm.prototype, "username", void 0);
__decorate([
    src_1.field(src_1.Component, { qa: "send-action" }),
    __metadata("design:type", src_1.Component)
], UserForm.prototype, "sendAction", void 0);
UserForm = __decorate([
    src_1.defaults({ qa: "user-form" }),
    __metadata("design:paramtypes", [])
], UserForm);
var Message = Message_1 = (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super.apply(this, arguments) || this;
    }
    return Message;
}(src_1.Component));
Message.states = {
    LATEST: "latest"
};
__decorate([
    src_1.field(src_1.Component, { qa: "message--msg" }),
    __metadata("design:type", src_1.Component)
], Message.prototype, "msg", void 0);
__decorate([
    src_1.field(src_1.Component, { qa: "message--user" }),
    __metadata("design:type", src_1.Component)
], Message.prototype, "user", void 0);
Message = Message_1 = __decorate([
    src_1.defaults({ states: Message_1.states }),
    __metadata("design:paramtypes", [])
], Message);
var ChatPage = (function (_super) {
    __extends(ChatPage, _super);
    function ChatPage() {
        return _super.apply(this, arguments) || this;
    }
    return ChatPage;
}(src_1.Component));
__decorate([
    src_1.field(src_1.Component, { qa: "options--select" }),
    __metadata("design:type", src_1.Component)
], ChatPage.prototype, "menu", void 0);
__decorate([
    src_1.field(ChatForm),
    __metadata("design:type", ChatForm)
], ChatPage.prototype, "chatForm", void 0);
__decorate([
    src_1.field(UserForm),
    __metadata("design:type", UserForm)
], ChatPage.prototype, "userForm", void 0);
__decorate([
    src_1.field(src_1.Component, { css: "h4" }),
    __metadata("design:type", src_1.Component)
], ChatPage.prototype, "title", void 0);
__decorate([
    src_1.field(src_1.List, { qa: "messages", itemQA: "message", itemType: Message }),
    __metadata("design:type", src_1.List)
], ChatPage.prototype, "messageList", void 0);
describe("example", function () {
    it("should pass", function () {
        protractor_1.browser.get("http://localhost:3002");
        var chatPage = new ChatPage();
        expect(chatPage.title.getText()).toBe("A simple chat system");
        expect(chatPage.userForm.username.isVisible()).toBe(true);
        chatPage.userForm.username.type("bob");
        chatPage.userForm.sendAction.click();
        expect(chatPage.userForm.isNotVisible()).toBe(true);
        expect(chatPage.chatForm.isVisible()).toBe(true);
        chatPage.chatForm.message.type("Hi everyone");
        expect(chatPage.chatForm.message.getText()).toBe("Hi everyone");
        chatPage.chatForm.sendAction.click();
        expect(chatPage.messageList.get(0).msg.getText()).toBe("Hi everyone");
        expect(chatPage.messageList.count()).toBe(1);
        var firstMessage = chatPage.messageList.getByText("Hi everyon", false);
        expect(firstMessage.user.getText()).toBe("bob");
        expect(firstMessage.msg.getText()).toBe("Hi everyone");
        chatPage.chatForm.sendMessage("new reply 2");
        expect(chatPage.messageList.count()).toBe(2);
        var secondMessage = chatPage.messageList.get(1);
        expect(secondMessage.user.getText()).toBe("bob");
        chatPage.menu.selectOption("clear messages");
        expect(chatPage.messageList.count()).toBe(0);
        chatPage.menu.selectOption("logout");
        chatPage.userForm.login("joe");
        chatPage.chatForm.sendMessage("new reply");
        var firstReply = chatPage.messageList.get(0);
        expect(firstReply.user.getText()).toBe("joe");
        expect(firstReply.is(Message.states.LATEST)).toBe(true);
        expect(firstReply.user.getElement().getText()).toBe("joe");
    });
});
var Message_1;
//# sourceMappingURL=TestSpec.js.map