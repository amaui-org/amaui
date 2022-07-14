import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeTwoTone'
      short_name='VerticalDistribute'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M22,2v2H2V2H22z M7,10.5v3h10v-3H7z M2,20v2h20v-2H2z"/>
    </Icon>
  );
});

export default IconMaterialVerticalDistributeTwoTone;
