export const TestA = () => <div>A</div>;
export const TestB = () => <div>B</div>;

export const TestComponent = { TestA, TestB };
export const TestComponent2 = Object.assign({}, { TestA, TestB });