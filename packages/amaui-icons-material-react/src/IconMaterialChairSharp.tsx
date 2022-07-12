import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairSharp'
      short_name='Chair'

      {...props}
    >
      <path d="M4 21V19H1V8H4V3H20V8H23V19H20V21H18V19H6V21ZM3 17H21V10H19V15H5V10H3ZM7 13H17V8H18V5H6V8H7ZM12 15ZM12 13ZM12 15Z"/>
    </Icon>
  )
});

export default IconMaterialChairSharp;
