import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTitleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleTwoTone'
      short_name='Title'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 7h5.5v12h3V7H19V4H5z"/>
    </Icon>
  )
});

export default IconMaterialTitleTwoTone;
