import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewArraySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewArraySharpFilled'
      short_name='ViewArray'

      {...props}
    >
      <path d="M18 19V5H21V19ZM7 19V5H17V19ZM3 19V5H6V19Z"/>
    </Icon>
  );
});

IconMaterialViewArraySharpFilled.displayName = 'AmauiIconMaterialViewArraySharpFilled';

export default IconMaterialViewArraySharpFilled;
