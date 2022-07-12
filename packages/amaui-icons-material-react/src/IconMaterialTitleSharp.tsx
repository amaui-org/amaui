import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleSharp'
      short_name='Title'

      {...props}
    >
      <path d="M10.5 20V7H5V4H19V7H13.5V20Z"/>
    </Icon>
  )
});

export default IconMaterialTitleSharp;
