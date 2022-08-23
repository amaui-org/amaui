import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewColumnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumnTwoTone'
      short_name='ViewColumn'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z" opacity=".3"/><path d="M3,5v14h18V5H3z M8.33,17H5V7h3.33V17z M13.67,17h-3.33V7h3.33V17z M19,17h-3.33V7H19V17z"/>
    </Icon>
  );
});

IconMaterialViewColumnTwoTone.displayName = 'AmauiIconMaterialViewColumnTwoTone';

export default IconMaterialViewColumnTwoTone;
