import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopSharpFilled'
      short_name='VerticalAlignTop'

      {...props}
    >
      <path d="M4 3H20V5H4ZM12 7 17 12 15.6 13.4 13 10.8V21H11V10.8L8.4 13.4L7 12Z"/>
    </Icon>
  )
});

export default IconMaterialVerticalAlignTopSharpFilled;
