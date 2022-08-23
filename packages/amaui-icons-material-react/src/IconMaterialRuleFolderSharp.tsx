import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleFolderSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderSharp'
      short_name='RuleFolder'

      {...props}
    >
      <path d="M7.825 16 12.775 11.05 11.35 9.625 7.825 13.175 6.4 11.75 5 13.175ZM14.4 16 16 14.4 17.6 16 19 14.6 17.4 13 19 11.4 17.6 10 16 11.6 14.4 10 13 11.4 14.6 13 13 14.6ZM2 4H10L12 6H22V20H2ZM4 6V18H20V8H11.175L9.175 6ZM4 18V6V8V18Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderSharp.displayName = 'AmauiIconMaterialRuleFolderSharp';

export default IconMaterialRuleFolderSharp;
