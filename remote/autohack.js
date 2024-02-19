let options;
const argsSchema = [
    ['target', 'home'],
    ['threads', 1],
    ['batches', 1]
]

/** @param {NS} ns **/
export async function main(ns) {
    options = ns.flags(argsSchema);

    for (let i = 0; i < options['batches']; i++) {
        await ns.hack(options['target']);
        await ns.weak(options['target']);
        await ns.grow(options['target']);
        await ns.weak(options['target']);
    }
}