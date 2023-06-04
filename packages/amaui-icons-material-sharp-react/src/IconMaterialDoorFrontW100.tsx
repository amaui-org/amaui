import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontW100'

      short_name='DoorFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V19h2V4.3h11.4V19h2v.7ZM17 19V5H7v14Zm-2.7-6.3q.275 0 .488-.213Q15 12.275 15 12t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213ZM7 5v14Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontW100.displayName = 'AmauiIconMaterialDoorFrontW100';

export default IconMaterialDoorFrontW100;
