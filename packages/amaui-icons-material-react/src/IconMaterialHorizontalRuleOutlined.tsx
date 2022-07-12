import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalRuleOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalRuleOutlined'
      short_name='HorizontalRule'

      {...props}
    >
      <path d="M4 13V11H20V13Z"/>
    </Icon>
  )
});

export default IconMaterialHorizontalRuleOutlined;
