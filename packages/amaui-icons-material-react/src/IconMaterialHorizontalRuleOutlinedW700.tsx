import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleOutlinedW700'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M3.15 13.575V10.425H20.85V13.575Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalRuleOutlinedW700;
