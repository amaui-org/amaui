import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOutlinedFilled'
      short_name='Code'

      {...props}
    >
      <path d="M16 18 14.575 16.575 19.175 11.975 14.6 7.4 16 6 22 12ZM8 18 2 12 8 6 9.425 7.425 4.825 12.025 9.4 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialCodeOutlinedFilled;
