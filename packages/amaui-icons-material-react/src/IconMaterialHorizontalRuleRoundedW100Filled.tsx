import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleRoundedW100Filled'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M5.65 12.35Q5.5 12.35 5.4 12.25Q5.3 12.15 5.3 12Q5.3 11.85 5.4 11.75Q5.5 11.65 5.65 11.65H18.35Q18.5 11.65 18.6 11.75Q18.7 11.85 18.7 12Q18.7 12.15 18.6 12.25Q18.5 12.35 18.35 12.35Z"/>
    </Icon>
  );
});

IconMaterialHorizontalRuleRoundedW100Filled.displayName = 'AmauiIconMaterialHorizontalRuleRoundedW100Filled';

export default IconMaterialHorizontalRuleRoundedW100Filled;
