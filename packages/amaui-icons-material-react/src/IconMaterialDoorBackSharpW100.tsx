import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackSharpW100'
      short_name='DoorBack'

      {...props}
    >
      <path d="M4.3 19.7V19H6.3V4.3H17.7V19H19.7V19.7ZM7 19H17V5H7ZM9.7 12.7Q9.975 12.7 10.188 12.487Q10.4 12.275 10.4 12Q10.4 11.725 10.188 11.512Q9.975 11.3 9.7 11.3Q9.425 11.3 9.213 11.512Q9 11.725 9 12Q9 12.275 9.213 12.487Q9.425 12.7 9.7 12.7ZM7 5V19Z"/>
    </Icon>
  );
});

IconMaterialDoorBackSharpW100.displayName = 'AmauiIconMaterialDoorBackSharpW100';

export default IconMaterialDoorBackSharpW100;
