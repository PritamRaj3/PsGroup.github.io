const initialState = {
    errmsgName: false,
    errmsgNumber: false,
    errmsgCity: false,
    errmsgEventName: false,
    requiredName: false,
    requiredEventName: false,
    requiredNumber: false,
}

const BookReducer = (state, action) => {

    if (action.type === 'BlurHandle') {
        let val = action.payload.nameValue;
        let name = action.payload.valueName;
        state.requiredName = false;
        state.requiredNumber = false;
        state.requiredEventName = false;

        switch (name) {
            case "names":
                let NameRule = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
                if (NameRule.test(val)) {
                    return {
                        ...state, errmsgName: false,
                    }
                } else {

                    return { ...state, errmsgName: true, }
                };

            case 'number':
                let NumberRule = /^([0-9]){10}$/;
                if (NumberRule.test(val)) {
                    return {
                        ...state,
                        errmsgNumber: false,
                    }
                } else {
                    return { ...state, errmsgNumber: true }
                };
            case 'city':
                let CityRule = /^[a-zA-Z]([a-zA-Z]){1,14}/
                if (CityRule.test(val)) {
                    return {
                        ...state,
                        errmsgCity: false
                    }
                } else {
                    return {
                        ...state,
                        errmsgCity: true
                    }
                };
            case 'eventName':
                if (val === '') {
                    return {
                        ...state,
                        requiredEventName: false,
                        errmsgEventName: true
                    }
                } else {
                    return {
                        ...state,
                        errmsgEventName: false
                    }
                };

            default: return state
        }

    } else if (action.type === 'ReqError') {
        let names = action.payload.RDN;
        let number = action.payload.RDNO;
        let eventNames = action.payload.RDEN;

        if (names === '') {
            state.requiredName = true;
            state.errmsgName = false;
        }
        if (number === '') {
            state.requiredNumber = true;
            state.errmsgNumber = false;
        }
        if (eventNames === '') {
            state.requiredEventName = true;
            state.errmsgEventName = false;
        }

        return {...state}

    } else if (action.type === 'BlankFill') {
        return { ...initialState, requiredEventName: true, requiredName: true, requiredNumber: true }
    }

};

export default BookReducer;
export { initialState }

