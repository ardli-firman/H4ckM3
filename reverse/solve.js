const data =
    ".nac uoy fi tIe$reveRpilF eldnah ym gnisu em egassem ,avaj yllacificeps ,gnidoc emos htiw pleh deen I ,deifitnedi tegrat txeN";

console.log(
    data
        .split(" ")
        .map(e => {
            y = [];
            y.push(
                e
                    .split("")
                    .reverse()
                    .join("")
            );
            return y;
        })
        .reverse()
        .join(" ")
);
