import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnSharpFilled'
      short_name='ViewColumn'

      {...props}
    >
      <path d="M15.675 19V5H21V19ZM9.35 19V5H14.675V19ZM3.025 19V5H8.35V19Z"/>
    </Icon>
  );
});

IconMaterialViewColumnSharpFilled.displayName = 'AmauiIconMaterialViewColumnSharpFilled';

export default IconMaterialViewColumnSharpFilled;
