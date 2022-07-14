import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectSharp'
      short_name='Eject'

      {...props}
    >
      <path d="M5 19V17H19V19ZM5.35 15 12 5 18.65 15ZM12 13ZM9.05 13H14.95L12 8.6Z"/>
    </Icon>
  );
});

export default IconMaterialEjectSharp;
