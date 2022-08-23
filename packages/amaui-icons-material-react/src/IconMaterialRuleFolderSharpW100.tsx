import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleFolderSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleFolderSharpW100'
      short_name='RuleFolder'

      {...props}
    >
      <path d="M7.825 15.075 11.85 11.05 11.35 10.55 7.825 14.075 6.425 12.675 5.925 13.175ZM14.4 15.075 16 13.475 17.6 15.075 18.075 14.6 16.475 13 18.075 11.4 17.6 10.925 16 12.525 14.4 10.925 13.925 11.4 15.525 13 13.925 14.6ZM3.3 6.3H11L12 7.3H20.7V18.7H3.3ZM4 7V18H20V8H11.725L10.725 7ZM4 18V7V8V18Z"/>
    </Icon>
  );
});

IconMaterialRuleFolderSharpW100.displayName = 'AmauiIconMaterialRuleFolderSharpW100';

export default IconMaterialRuleFolderSharpW100;
