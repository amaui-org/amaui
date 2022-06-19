import { types as t } from '@babel/core';

export default function () {
  return {
    name: '@amaui',
    visitor: {
      Program: {
        enter(path, state) {
          state.imports = [];

          const { bindings } = path.scope;

          // Add import for @amaui/style-vue className method
          if (!bindings.amauiStyleVueClassName) {
            state.imports.push(
              t.variableDeclaration('var', [
                t.variableDeclarator(
                  t.identifier('amauiStyleVueClassName'),
                  t.memberExpression(
                    t.callExpression(t.identifier('require'), [
                      t.stringLiteral('@amaui/style-vue'),
                    ]),
                    t.identifier('className')
                  )
                ),
              ])
            );
          }
        },

        // Imports at the top, below the present imports
        exit(path, state) {
          path.node.body.unshift(...state.imports);
        },
      },

      JSXAttribute(path) {
        const prop = path.node.name.name;

        if (prop !== 'css') return;

        const parent = path.parentPath;

        const value = path.node.value;

        const classIndex = parent.node.attributes.findIndex(path_ => path_.name.name === 'class');

        const classProp = parent.node.attributes[classIndex];

        const args = [
          value.expression
        ];

        if (classProp) args.push(classProp.value.expression);

        // Value
        const argValue = t.jSXAttribute(
          t.jSXIdentifier('class'),
          t.jSXExpressionContainer(
            t.callExpression(
              t.identifier('amauiStyleVueClassName'),
              args
            )
          )
        );

        // Add, override value for classProp in parent attributes
        if (classProp) {
          parent.node.attributes.splice(
            classIndex,
            1,
            argValue
          );
        }
        else {
          parent.node.attributes.push(argValue);
        }

        // Clean up
        path.remove();
      }
    }
  };
}
