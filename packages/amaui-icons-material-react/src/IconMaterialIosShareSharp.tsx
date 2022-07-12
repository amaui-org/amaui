import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIosShareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareSharp'
      short_name='IosShare'

      {...props}
    >
      <path d="M11 16V4.825L9.4 6.425L8 5L12 1L16 5L14.6 6.425L13 4.825V16ZM4 23V8H9V10H6V21H18V10H15V8H20V23Z"/>
    </Icon>
  )
});

export default IconMaterialIosShareSharp;
