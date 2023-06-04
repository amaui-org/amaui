import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSlidingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingW100'

      short_name='DoorSliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.95 12.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4.1 0q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-9.1 7V19h1V4.3h12.1V19h1v.7Zm1.7-.7h5V5h-5Zm5.7 0h5V5h-5ZM12 11.65Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100.displayName = 'AmauiIconMaterialDoorSlidingW100';

export default IconMaterialDoorSlidingW100;
