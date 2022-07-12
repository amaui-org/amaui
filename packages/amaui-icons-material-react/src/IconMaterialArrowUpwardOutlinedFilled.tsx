import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardOutlinedFilled'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M11 20V7.825L5.4 13.425L4 12L12 4L20 12L18.6 13.425L13 7.825V20Z"/>
    </Icon>
  )
});

export default IconMaterialArrowUpwardOutlinedFilled;
