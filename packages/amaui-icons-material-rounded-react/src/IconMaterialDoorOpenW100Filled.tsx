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
      <path d="M5.25 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H6.3V5.15q0-.625.438-1.063.437-.437 1.062-.437h8.4q.625 0 1.062.437.438.438.438 1.063V19h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM17 19V5.15q0-.35-.225-.575-.225-.225-.575-.225h-3.25v-.3q.875.075 1.463.725Q15 5.425 15 6.3v11.375q0 .575-.4 1.013-.4.437-.975.487V19Zm-5.975-6.3q.275 0 .475-.213.2-.212.2-.512 0-.275-.2-.475-.2-.2-.5-.2-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.512.213Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100Filled.displayName = 'AmauiIconMaterialDoorOpenW100Filled';

export default IconMaterialDoorOpenW100Filled;
