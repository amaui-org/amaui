import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsOutlinedFilled'
      short_name='Details'

      {...props}
    >
      <path d="M2 21 12 3 22 21ZM5.4 19H11V8.925ZM13 19H18.6L13 8.925Z"/>
    </Icon>
  )
});

export default IconMaterialDetailsOutlinedFilled;
