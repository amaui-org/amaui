import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRuleSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RuleSharpW100'
      short_name='Rule'

      {...props}
    >
      <path d="M16.55 10.075 13.925 7.45 14.4 6.975 16.525 9.1 20.775 4.85 21.25 5.35ZM2.65 8.35V7.65H10.35V8.35ZM14.4 19.075 13.925 18.6 16.525 16 13.925 13.4 14.4 12.925 17 15.525 19.6 12.925 20.075 13.4 17.475 16 20.075 18.6 19.6 19.075 17 16.475ZM2.65 16.35V15.65H10.35V16.35Z"/>
    </Icon>
  );
});

IconMaterialRuleSharpW100.displayName = 'AmauiIconMaterialRuleSharpW100';

export default IconMaterialRuleSharpW100;
