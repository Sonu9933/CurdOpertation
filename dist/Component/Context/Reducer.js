var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var AppReducer = function (state, action) {
    switch (action.type) {
        case "ADD_CAR":
            return __assign(__assign({}, state), { cars: __spreadArray(__spreadArray([], state.cars, true), [action.payload], false) });
        case "GET_CAR":
            return __assign(__assign({}, state), { cars: action.payload });
        case "LOOK_CAR":
            var carId_1 = action.payload;
            var updatedcars = state.cars.map(function (car) {
                if (car.Id === carId_1) {
                    return car;
                }
                return car;
            });
            return __assign(__assign({}, state), { cars: updatedcars });
        case "UPDATE_CAR":
            var updatedCarList = state.cars.map(function (car) {
                if (car.Id === action.payload.Id) {
                    return action.payload;
                }
                return car;
            });
            return __assign(__assign({}, state), { cars: updatedCarList });
        case "REMOVE_CAR":
            return __assign(__assign({}, state), { cars: state.cars.filter(function (c) { return c.Id !== action.payload; }) });
        case "SEARCH_CAR":
            return __assign(__assign({}, state), { carResult: state
                    .cars
                    .filter(function (car) {
                    return car.Company.includes(action.payload) ||
                        car.Model.includes(action.payload);
                }) });
        default:
            throw new Error('Invalid Action Type');
    }
};
