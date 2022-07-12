import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallOutlinedFilled'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M7 13v-2h10v2Z"/>
    </Icon>
  )
});

export default IconMaterialCheckIndeterminateSmallOutlinedFilled;
