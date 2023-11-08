import { ComponentContext } from '@teambit/generator';

export const componentFile = (context: ComponentContext) => {
  const { name, namePascalCase: Name } = context;

  return {
    relativePath: `${name}.tsx`,
    content: `import style from './${name}.module.scss';

export type ${Name}Props = {
  children?: React.ReactNode;
};

export function ${Name}({ children }: ${Name}Props) {
  return (
    <div className={style.${Name}}>
      {children}
    </div>
  );
}
`,
  };
};
