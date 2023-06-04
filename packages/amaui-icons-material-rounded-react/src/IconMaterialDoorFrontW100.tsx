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
      <path d="M4.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H6.3V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h8.4q.65 0 1.075.425.425.425.425 1.075V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM17 19V5.8q0-.35-.225-.575Q16.55 5 16.2 5H7v14Zm-2.7-6.3q.275 0 .488-.213Q15 12.275 15 12t-.212-.488q-.213-.212-.488-.212t-.488.212q-.212.213-.212.488t.212.487q.213.213.488.213ZM7 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontW100.displayName = 'AmauiIconMaterialDoorFrontW100';

export default IconMaterialDoorFrontW100;
