import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleSharpFilled'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M4 13V11H20V13Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalRuleSharpFilled;
