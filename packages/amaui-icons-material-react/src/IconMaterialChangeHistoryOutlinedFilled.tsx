import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChangeHistoryOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChangeHistoryOutlinedFilled'
      short_name='ChangeHistory'

      {...props}
    >
      <path d="M2 20 12 4 22 20Z"/>
    </Icon>
  )
});

export default IconMaterialChangeHistoryOutlinedFilled;
