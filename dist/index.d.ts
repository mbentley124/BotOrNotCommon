export interface IMessager {
    name: string;
    id: string;
}
export declare enum RequestType {
    LOGIN = 0,
    SEARCH = 1,
    MESSAGE = 2,
    GUESS = 3
}
export interface IRequest {
    type: RequestType;
}
export interface IMessageRequest extends IRequest {
    type: typeof RequestType.MESSAGE;
    message: string;
}
export interface ISearchRequest extends IRequest {
    type: typeof RequestType.SEARCH;
    name: string;
}
export interface IGuessRequest extends IRequest {
    type: typeof RequestType.GUESS;
    guess: string;
}
export interface ILoginRequest extends IRequest {
    type: typeof RequestType.LOGIN;
    password: string;
}
export declare enum ResponseType {
    LOGIN_RESULT = 0,
    RECIEVE_MESSAGE = 1,
    SEARCH_COMPLETE = 2,
    END_CHAT = 3,
    GUESS_RESULT = 4
}
export interface IResponse {
    type: ResponseType;
}
export interface ILoginResultResponse extends IResponse {
    type: typeof ResponseType.LOGIN_RESULT;
    success: boolean;
}
export interface ISearchCompleteResponse extends IResponse {
    type: typeof ResponseType.SEARCH_COMPLETE;
    others: IMessager[];
}
export interface IRecieveMessageResponse extends IResponse {
    type: typeof ResponseType.RECIEVE_MESSAGE;
    message: string;
    from: string;
}
export declare enum GuessResult {
    NO_GUESS = 0,
    CORRECT = 1,
    INCORRECT = 2
}
export interface IGuessResults {
    yourGuess: GuessResult;
    otherGuesses: {
        from: string;
        result: GuessResult;
    }[];
    bot: string;
}
export interface IGuessResultResponse extends IResponse {
    type: typeof ResponseType.GUESS_RESULT;
    guessResults: IGuessResults;
}
