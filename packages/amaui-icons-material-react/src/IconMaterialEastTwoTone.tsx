import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEastTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastTwoTone'
      short_name='East'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/>
    </Icon>
  )
});

export default IconMaterialEastTwoTone;
