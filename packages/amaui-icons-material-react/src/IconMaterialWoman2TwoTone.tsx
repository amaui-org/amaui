import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWoman2TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2TwoTone'
      short_name='Woman2'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M13.94,8.31C13.62,7.52,12.85,7,12,7s-1.62,0.52-1.94,1.31L7,16h3.5v6h3v-6H17L13.94,8.31z"/><circle cx="12" cy="4" r="2"/></g></g></g>
    </Icon>
  );
});

IconMaterialWoman2TwoTone.displayName = 'AmauiIconMaterialWoman2TwoTone';

export default IconMaterialWoman2TwoTone;
