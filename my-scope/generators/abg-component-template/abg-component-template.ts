import {
    ComponentContext,
    ComponentFile,
    ComponentTemplate,
  } from '@teambit/generator';
  import { indexFile } from './files/index-file';
  import { componentFile } from './files/component-file';
  import { testFile } from './files/test-file';
  import { compositionFile } from './files/composition-file';
  import { styleFile } from './files/style-file';
  
  export type AbgComponentTemplateComponentTemplateOptions = {
    /**
     * name of the template
     */
    name?: string;
  
    /**
     * description of the template.
     */
    description?: string;
  
    /**
     * hide the template from the templates command.
     */
    hidden?: boolean;
  };
  
  export class AbgComponentTemplateComponentTemplate implements ComponentTemplate {
    constructor(
      readonly name = 'abg-react',
      readonly description = 'a template for abg-component-template components',
      readonly hidden = false
    ) {}
  
    generateFiles(context: ComponentContext): ComponentFile[] {
      return [
        indexFile(context),
        compositionFile(context),
        componentFile(context),
        testFile(context),
        styleFile(context),
      ];
    }
  
    static from(options: AbgComponentTemplateComponentTemplateOptions = {}) {
      return () =>
        new AbgComponentTemplateComponentTemplate(
          options.name,
          options.description,
          options.hidden
        );
    }
  }
  
