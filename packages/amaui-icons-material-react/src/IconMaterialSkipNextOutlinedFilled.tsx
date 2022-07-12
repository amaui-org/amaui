import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextOutlinedFilled'
      short_name='SkipNext'

      {...props}
    >
      <path d="M16.5 18V6H18.5V18ZM5.5 18V6L14.5 12Z"/>
    </Icon>
  )
});

export default IconMaterialSkipNextOutlinedFilled;
