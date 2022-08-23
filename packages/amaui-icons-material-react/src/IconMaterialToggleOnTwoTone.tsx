import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOnTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOnTwoTone'
      short_name='ToggleOn'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M17 8H7c-2.21 0-4 1.79-4 4s1.79 4 4 4h10c2.21 0 4-1.79 4-4s-1.79-4-4-4zm0 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" opacity=".3"/><path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </Icon>
  );
});

IconMaterialToggleOnTwoTone.displayName = 'AmauiIconMaterialToggleOnTwoTone';

export default IconMaterialToggleOnTwoTone;
