import { types as t } from '@babel/core';

export default function () {
  return {
    name: '@amaui',
    visitor: {
      Program: {
        enter(path, state) {
          state.imports = [];

          const { bindings } = path.scope;

          // Add import for @amaui/style-react className method
          if (!bindings.amauiStyleReactClassName) {
            state.imports.push(
              t.variableDeclaration('var', [
                t.variableDeclarator(
                  t.identifier('amauiStyleReactClassName'),
                  t.memberExpression(
                    t.callExpression(t.identifier('require'), [
                      t.stringLiteral('@amaui/style-react'),
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

        const classNameIndex = parent.node.attributes.findIndex(path_ => path_.name.name === 'className');

        const className = parent.node.attributes[classNameIndex];

        const args = [
          value.expression
        ];

        if (className) args.push(className.value.expression);

        // Value
        const argValue = t.jSXAttribute(
          t.jSXIdentifier('className'),
          t.jSXExpressionContainer(
            t.callExpression(
              t.identifier('amauiStyleReactClassName'),
              args
            )
          )
        );

        // Add, override value for className in parent attributes
        if (className) {
          parent.node.attributes.splice(
            classNameIndex,
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
