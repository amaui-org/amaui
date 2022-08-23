import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthTwoTone'
      short_name='South'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"/>
    </Icon>
  );
});

IconMaterialSouthTwoTone.displayName = 'AmauiIconMaterialSouthTwoTone';

export default IconMaterialSouthTwoTone;
