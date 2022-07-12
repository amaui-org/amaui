import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOutlinedW100'
      short_name='Code'

      {...props}
    >
      <path d="M16 17.1 15.5 16.6 20.1 12 15.5 7.4 16 6.9 21.1 12ZM8 17.1 2.9 12 8 6.9 8.5 7.4 3.9 12 8.5 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialCodeOutlinedW100;
