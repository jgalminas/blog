import { useState, useEffect } from "react";

export default function useTransition(duration) {

    const [state, setState] = useState();

    function enter() {
        (state !== 'exiting') && setState('entering');
    }

    function exit() {
        (state !== 'entering') && setState('exiting');
    }

    useEffect(() => {

        let timerId;

        if (state === 'entering') {
            timerId = setTimeout(() => setState('entered'), duration);
        } else if (state === 'exiting') {
            timerId = setTimeout(() => setState('exited'), duration);
        }

        () => {
            timerId && clearTimeout(timerId);
        }

    })

    return [state, enter, exit]
}