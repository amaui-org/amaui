import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCodeOffTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CodeOffTwoTone'
      short_name='CodeOff'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M19.17,12l-4.58-4.59L16,6l6,6l-3.59,3.59L17,14.17L19.17,12z M1.39,4.22l4.19,4.19L2,12l6,6l1.41-1.41L4.83,12L7,9.83 l12.78,12.78l1.41-1.41L2.81,2.81L1.39,4.22z"/>
    </Icon>
  );
});

IconMaterialCodeOffTwoTone.displayName = 'AmauiIconMaterialCodeOffTwoTone';

export default IconMaterialCodeOffTwoTone;
