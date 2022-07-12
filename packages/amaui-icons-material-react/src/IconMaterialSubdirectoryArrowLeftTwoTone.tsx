import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftTwoTone'
      short_name='SubdirectoryArrowLeft'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/>
    </Icon>
  )
});

export default IconMaterialSubdirectoryArrowLeftTwoTone;
