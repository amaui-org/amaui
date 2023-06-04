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
      <path d="M11 12.7q.3 0 .5-.213.2-.212.2-.487 0-.3-.2-.5t-.5-.2q-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.487.213Zm-4 7V19l7.3-.6V4.85L7 4.35v-.7l8 .55v14.85Zm0-.7h10V4.35H7Zm-2.1.7V19h1.4V3.65h11.4V19h1.4v.7Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenW100.displayName = 'AmauiIconMaterialDoorOpenW100';

export default IconMaterialDoorOpenW100;
