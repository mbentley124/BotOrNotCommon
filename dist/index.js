"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuessResult = exports.ResponseType = exports.RequestType = void 0;
var RequestType;
(function (RequestType) {
    RequestType[RequestType["LOGIN"] = 0] = "LOGIN";
    RequestType[RequestType["SEARCH"] = 1] = "SEARCH";
    RequestType[RequestType["MESSAGE"] = 2] = "MESSAGE";
    RequestType[RequestType["GUESS"] = 3] = "GUESS";
    RequestType[RequestType["KEEP_ALIVE"] = 4] = "KEEP_ALIVE";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["LOGIN_RESULT"] = 0] = "LOGIN_RESULT";
    ResponseType[ResponseType["RECIEVE_MESSAGE"] = 1] = "RECIEVE_MESSAGE";
    ResponseType[ResponseType["SEARCH_COMPLETE"] = 2] = "SEARCH_COMPLETE";
    ResponseType[ResponseType["END_CHAT"] = 3] = "END_CHAT";
    ResponseType[ResponseType["GUESS_RESULT"] = 4] = "GUESS_RESULT";
})(ResponseType = exports.ResponseType || (exports.ResponseType = {}));
var GuessResult;
(function (GuessResult) {
    GuessResult[GuessResult["NO_GUESS"] = 0] = "NO_GUESS";
    GuessResult[GuessResult["CORRECT"] = 1] = "CORRECT";
    GuessResult[GuessResult["INCORRECT"] = 2] = "INCORRECT";
})(GuessResult = exports.GuessResult || (exports.GuessResult = {}));
//# sourceMappingURL=index.js.map