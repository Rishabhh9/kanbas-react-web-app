function ImpliedReturn(){
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);
    return (
        <>
        <h3> Implied return </h3>
        <p>fourTimesFive = {fourTimesFive}</p>
        <p>multiply(4,5) = {multiply(4,5)}</p>
        </>
    )
}
export default ImpliedReturn