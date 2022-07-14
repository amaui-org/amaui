import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeenhereSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereSharp'
      short_name='Beenhere'

      {...props}
    >
      <path d="M12 23 4 17V2H20V17ZM12 20.5 18 16V4H6V16ZM10.95 15 16.6 9.35 15.2 7.9 10.95 12.15 8.85 10.05 7.4 11.45ZM12 4H6H18Z"/>
    </Icon>
  );
});

export default IconMaterialBeenhereSharp;
