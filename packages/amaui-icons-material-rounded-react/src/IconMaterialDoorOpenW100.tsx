import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenW100'

      short_name='DoorOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12.7q.3 0 .5-.213.2-.212.2-.487 0-.3-.2-.5t-.5-.2q-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.487.213Zm-4 7V19l6.575-.55q.325-.025.525-.238.2-.212.2-.537V6.325q0-.625-.412-1.075-.413-.45-1.013-.5L7.8 4.35v-.7l5.15.4q.875.075 1.463.725Q15 5.425 15 6.3v11.375q0 .575-.4 1-.4.425-.975.475Zm0-.7h10V5.15q0-.35-.225-.575-.225-.225-.575-.225H7.8q-.35 0-.575.225Q7 4.8 7 5.15Zm-1.75.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H6.3V5.15q0-.65.438-1.075.437-.425 1.062-.425h8.4q.65 0 1.075.425.425.425.425 1.075V19h1.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100.displayName = 'AmauiIconMaterialDoorOpenW100';

export default IconMaterialDoorOpenW100;
