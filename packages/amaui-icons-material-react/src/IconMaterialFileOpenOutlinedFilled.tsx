import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileOpenOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenOutlinedFilled'
      short_name='FileOpen'

      {...props}
    >
      <path d="M21.95 22.375 19 19.425V21.65H17V16H22.65V18H20.4L23.35 20.95ZM13 9H18L13 4ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V14H15V22Z"/>
    </Icon>
  )
});

export default IconMaterialFileOpenOutlinedFilled;
