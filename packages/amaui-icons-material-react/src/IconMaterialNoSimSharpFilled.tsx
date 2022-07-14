import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharpFilled'
      short_name='NoSim'

      {...props}
    >
      <path d="M20 17.175 7.4 4.6 10 2H20ZM20.5 23.3 18.95 21.75V22H4V8L4.6 7.4L0.7 3.5L2.125 2.1L21.9 21.875Z"/>
    </Icon>
  );
});

export default IconMaterialNoSimSharpFilled;
