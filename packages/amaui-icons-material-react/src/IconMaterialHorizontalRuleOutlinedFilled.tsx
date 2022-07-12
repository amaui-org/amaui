import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleOutlinedFilled'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M4 13V11H20V13Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalRuleOutlinedFilled;
