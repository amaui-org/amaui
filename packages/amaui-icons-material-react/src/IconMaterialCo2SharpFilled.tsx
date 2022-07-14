import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCo2SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Co2SharpFilled'
      short_name='Co2'

      {...props}
    >
      <path d="M10 15V9H15V15ZM11.5 13.5H13.5V10.5H11.5ZM3 15V9H8V11H6.5V10.5H4.5V13.5H6.5V13H8V15ZM17 18V14.5H20V13.5H17V12H21.5V15.5H18.5V16.5H21.5V18Z"/>
    </Icon>
  );
});

export default IconMaterialCo2SharpFilled;
