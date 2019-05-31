import { removeEvent } from "../utils/utils";

export const handlePageChange = ({ type, target, handler, route } = arg) => {
    removeEvent({
        type,
        target,
        handler
    });
    location.hash = route;
};