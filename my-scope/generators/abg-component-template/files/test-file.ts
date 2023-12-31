import { ComponentContext } from '@teambit/generator';

export const testFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: name + '.spec.tsx',
    content: `import { render } from '@testing-library/react';
import { Basic${Name} } from './${name}.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<Basic${Name} />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
`,
  };
};
