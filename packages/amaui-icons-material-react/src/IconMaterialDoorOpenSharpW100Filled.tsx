import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenSharpW100Filled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M4.9 19.7V19h1.4V3.65h11.4V19h1.4v.7ZM15 19h2V4.35h-2Zm-3.975-6.3q.275 0 .475-.213.2-.212.2-.512 0-.275-.2-.475-.2-.2-.5-.2-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.512.213Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenSharpW100Filled.displayName = 'AmauiIconMaterialDoorOpenSharpW100Filled';

export default IconMaterialDoorOpenSharpW100Filled;
