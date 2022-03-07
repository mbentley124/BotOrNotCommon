export interface IMessager {
	name: string,
	id: string,
}

export enum RequestType {
	LOGIN,
	SEARCH,
	MESSAGE,
	GUESS,
}

// Requests are all messages from the Client to the Server
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

export enum ResponseType {
	LOGIN_RESULT,
	RECIEVE_MESSAGE,
	SEARCH_COMPLETE,
	END_CHAT,
	GUESS_RESULT,
}

// Responses are all messages from the Server to the Client
export interface IResponse {
	type: ResponseType;
}

export interface ILoginResultResponse extends IResponse {
	type: typeof ResponseType.LOGIN_RESULT;
	success: boolean;
}

export interface ISearchCompleteResponse extends IResponse {
	type: typeof ResponseType.SEARCH_COMPLETE;
	others: IMessager[]
}

export interface IRecieveMessageResponse extends IResponse {
	type: typeof ResponseType.RECIEVE_MESSAGE;
	message: string;
	from: string // Id of who its from
}

export enum GuessResult {
	NO_GUESS, CORRECT, INCORRECT
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