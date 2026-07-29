export function ROM_archive(chdsk_output){
    return {
        frame: chdsk_output,
        compressed: JSON.stringify(chdsk_output),
        stamp: Date.now()
    };
}
