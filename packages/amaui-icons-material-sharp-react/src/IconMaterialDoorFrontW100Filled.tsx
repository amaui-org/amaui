import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorFrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontW100Filled'

      short_name='DoorFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V19h2V4.3h11.4V19h2v.7Zm10-7q.275 0 .488-.213Q15 12.275 15 12t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontW100Filled.displayName = 'AmauiIconMaterialDoorFrontW100Filled';

export default IconMaterialDoorFrontW100Filled;
