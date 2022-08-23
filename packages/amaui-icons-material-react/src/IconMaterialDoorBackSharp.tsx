import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackSharp'
      short_name='DoorBack'

      {...props}
    >
      <path d="M3 21V19H5V3H19V19H21V21ZM7 19H17V5H7ZM10 13Q10.425 13 10.713 12.712Q11 12.425 11 12Q11 11.575 10.713 11.287Q10.425 11 10 11Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13ZM7 5V19Z"/>
    </Icon>
  );
});

IconMaterialDoorBackSharp.displayName = 'AmauiIconMaterialDoorBackSharp';

export default IconMaterialDoorBackSharp;
