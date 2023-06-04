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
      <path d="M9.925 12.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm4.1 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm-8.1 7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1V5.8q0-.65.425-1.075.425-.425 1.075-.425h4.2V19h.7V4.3h4.2q.65 0 1.075.425.425.425.425 1.075V19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDoorSlidingW100Filled.displayName = 'AmauiIconMaterialDoorSlidingW100Filled';

export default IconMaterialDoorSlidingW100Filled;
