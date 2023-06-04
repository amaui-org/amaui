import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorBackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackW100Filled'

      short_name='DoorBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H6.3V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h8.4q.65 0 1.075.425.425.425.425 1.075V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.05-7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q9.975 11.3 9.7 11.3t-.487.212Q9 11.725 9 12t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialDoorBackW100Filled.displayName = 'AmauiIconMaterialDoorBackW100Filled';

export default IconMaterialDoorBackW100Filled;
