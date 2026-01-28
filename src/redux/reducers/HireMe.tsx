interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  timestamp: number;
}

interface HireMeState {
  messages: ChatMessage[];
}

const initialState: HireMeState = {
  messages: [],
};

export const hireMeReducer = (
  state = initialState,
  action: any
): HireMeState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: Date.now().toString(),
            question: action.payload.question,
            answer: action.payload.answer,
            timestamp: Date.now(),
          },
        ],
      };
    case "LOAD_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "CLEAR_MESSAGES":
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};
