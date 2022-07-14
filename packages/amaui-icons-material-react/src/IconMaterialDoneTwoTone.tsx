import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneTwoTone'
      short_name='Done'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </Icon>
  );
});

export default IconMaterialDoneTwoTone;
