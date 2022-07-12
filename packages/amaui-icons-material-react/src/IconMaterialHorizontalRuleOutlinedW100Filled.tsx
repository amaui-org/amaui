import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleOutlinedW100Filled'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M5.3 12.35V11.65H18.7V12.35Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalRuleOutlinedW100Filled;
