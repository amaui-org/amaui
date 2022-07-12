import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMmsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MmsSharp'
      short_name='Mms'

      {...props}
    >
      <path d="M6 14H18L14.25 9L11.25 13L9 10ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  )
});

export default IconMaterialMmsSharp;
