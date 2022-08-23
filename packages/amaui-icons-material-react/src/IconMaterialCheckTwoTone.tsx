import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckTwoTone'
      short_name='Check'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
    </Icon>
  );
});

IconMaterialCheckTwoTone.displayName = 'AmauiIconMaterialCheckTwoTone';

export default IconMaterialCheckTwoTone;
