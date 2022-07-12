import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoundedCornerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundedCornerRoundedW100'
      short_name='RoundedCorner'

      {...props}
    >
      <path d="M19 19.7V17.7H19.7V19.7ZM19 15.7V13.7H19.7V15.7ZM4.3 13V11H5V13ZM4.3 17V15H5V17ZM4.3 9V7H5V9ZM4.3 5V4.3H6.3V5ZM8.3 5V4.3H10.3V5ZM15 19.7V19H17V19.7ZM11 19.7V19H13V19.7ZM7 19.7V19H9V19.7ZM4.3 19.7V19H5V19.7ZM19 11.7V9Q19 7.35 17.825 6.175Q16.65 5 15 5H12.3V4.3H15Q16.95 4.3 18.325 5.65Q19.7 7 19.7 9V11.7Z"/>
    </Icon>
  )
});

export default IconMaterialRoundedCornerRoundedW100;
