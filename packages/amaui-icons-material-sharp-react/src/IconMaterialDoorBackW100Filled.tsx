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
      <path d="M4.3 19.7V19h2V4.3h11.4V19h2v.7Zm5.4-7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q9.975 11.3 9.7 11.3t-.487.212Q9 11.725 9 12t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialDoorBackW100Filled.displayName = 'AmauiIconMaterialDoorBackW100Filled';

export default IconMaterialDoorBackW100Filled;
