import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDiscoverTuneTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiscoverTuneTwoTone'
      short_name='DiscoverTune'

      {...props}
    >
      <path d="M12.375 9.5V6.475H15.375V2.6H18.4V6.475H21.4V9.5ZM15.375 21.375V11.25H18.4V21.375ZM5.625 21.375V17.5H2.625V14.475H11.65V17.5H8.65V21.375ZM5.625 12.725V2.6H8.65V12.725Z"/>
    </Icon>
  )
});

export default IconMaterialDiscoverTuneTwoTone;
