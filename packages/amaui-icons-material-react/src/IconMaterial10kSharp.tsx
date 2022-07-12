import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kSharp'
      short_name='10k'

      {...props}
    >
      <path d="M13.925 15H15.425V12.75L17.175 15H19L16.675 12L19 9H17.175L15.425 11.25V9H13.925ZM6 15H7.5V9H5V10.5H6ZM8.5 15H13V9H8.5ZM10 13.5V10.5H11.5V13.5ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  )
});

export default IconMaterial10kSharp;
