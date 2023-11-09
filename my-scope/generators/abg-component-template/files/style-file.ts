import { ComponentContext } from '@teambit/generator';

export const styleFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.module.scss`,
    content: `.${Name} {}
`,
  };
};
