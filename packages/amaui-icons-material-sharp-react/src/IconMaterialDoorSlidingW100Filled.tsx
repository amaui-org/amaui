import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSlidingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSlidingW100Filled'

      short_name='DoorSliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.95 12.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4.1 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Zm-9.1 7V19h1V4.3h5.7V19h.7V4.3h5.7V19h1v.7Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100Filled.displayName = 'AmauiIconMaterialDoorSlidingW100Filled';

export default IconMaterialDoorSlidingW100Filled;
