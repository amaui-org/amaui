import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleSharp'
      short_name='Rule'

      {...props}
    >
      <path d="M16.55 11 13 7.45 14.4 6.05 16.525 8.175 20.775 3.925 22.175 5.35ZM2 9V7H11V9ZM14.4 20 13 18.6 15.6 16 13 13.4 14.4 12 17 14.6 19.6 12 21 13.4 18.4 16 21 18.6 19.6 20 17 17.4ZM2 17V15H11V17Z"/>
    </Icon>
  );
});

IconMaterialRuleSharp.displayName = 'AmauiIconMaterialRuleSharp';

export default IconMaterialRuleSharp;
