import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthEastSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthEastSharpW100'
      short_name='SouthEast'

      {...props}
    >
      <path d="M9.65 18.35V17.65H17.15L4.9 5.4L5.4 4.9L17.65 17.15V9.65H18.35V18.35Z"/>
    </Icon>
  )
});

export default IconMaterialSouthEastSharpW100;
