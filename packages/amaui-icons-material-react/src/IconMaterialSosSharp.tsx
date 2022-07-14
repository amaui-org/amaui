import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSosSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosSharp'
      short_name='Sos'

      {...props}
    >
      <path d="M8.5 17V7H15.5V17ZM1 17V15H5V13H1V7H7V9H3V11H7V17ZM17 17V15H21V13H17V7H23V9H19V11H23V17ZM10.5 15H13.5V9H10.5Z"/>
    </Icon>
  );
});

export default IconMaterialSosSharp;
