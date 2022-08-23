import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharp'
      short_name='NoSim'

      {...props}
    >
      <path d="M20 17.175 18 15.175V4H10.85L8.85 6L7.4 4.6L10 2H20ZM20.5 23.3 18.95 21.75V22H4V8L4.6 7.4L0.7 3.5L2.125 2.1L21.9 21.875ZM6 8.8V20H17.15ZM13.525 10.675ZM11.65 14.475Z"/>
    </Icon>
  );
});

IconMaterialNoSimSharp.displayName = 'AmauiIconMaterialNoSimSharp';

export default IconMaterialNoSimSharp;
