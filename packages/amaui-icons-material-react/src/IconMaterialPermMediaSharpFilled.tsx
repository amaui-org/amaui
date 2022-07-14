import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermMediaSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaSharpFilled'
      short_name='PermMedia'

      {...props}
    >
      <path d="M5 17V2H12L14 4H23V17ZM1 21V6H3V19H20V21ZM9 13H19L15.55 8.5L13.25 11.5L11.7 9.5Z"/>
    </Icon>
  );
});

export default IconMaterialPermMediaSharpFilled;
