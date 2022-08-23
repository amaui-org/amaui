import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPolymerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerTwoTone'
      short_name='Polymer'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/>
    </Icon>
  );
});

IconMaterialPolymerTwoTone.displayName = 'AmauiIconMaterialPolymerTwoTone';

export default IconMaterialPolymerTwoTone;
