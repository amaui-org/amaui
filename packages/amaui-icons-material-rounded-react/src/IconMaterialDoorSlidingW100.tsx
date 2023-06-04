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
      <path d="M9.95 12.7q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4.1 0q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-8.1 7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1V5.8q0-.65.425-1.075Q6.8 4.3 7.45 4.3h9.1q.65 0 1.075.425.425.425.425 1.075V19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.7-.7h5V5h-4.2q-.35 0-.575.225-.225.225-.225.575Zm5.7 0h5V5.8q0-.35-.225-.575Q16.9 5 16.55 5h-4.2ZM12 11.65Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100.displayName = 'AmauiIconMaterialDoorSlidingW100';

export default IconMaterialDoorSlidingW100;
