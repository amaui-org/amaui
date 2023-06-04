import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenW100Filled'

      short_name='DoorOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.9 19.7V19h1.4V3.65h11.4V19h1.4v.7ZM15 19h2V4.35h-2Zm-3.975-6.3q.275 0 .475-.213.2-.212.2-.512 0-.275-.2-.475-.2-.2-.5-.2-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.512.213Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100Filled.displayName = 'AmauiIconMaterialDoorOpenW100Filled';

export default IconMaterialDoorOpenW100Filled;
