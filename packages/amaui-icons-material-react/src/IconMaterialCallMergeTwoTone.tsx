import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMergeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeTwoTone'
      short_name='CallMerge'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.997 20.41l-3.408-3.407 1.4-1.407 3.41 3.408zM5.59 19L7 20.41l6-6V8h3.5L12 3.5 7.5 8H11v5.59z"/>
    </Icon>
  );
});

IconMaterialCallMergeTwoTone.displayName = 'AmauiIconMaterialCallMergeTwoTone';

export default IconMaterialCallMergeTwoTone;
