import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningSharpFilled'
      short_name='TakeoutDining'

      {...props}
    >
      <path d="M4.625 10 2 7.45 3.4 6.05 5 7.65 4.95 7.05 9 3H15L19.05 7.05L19 7.65L20.6 6.05L22 7.45L19.375 10ZM5.95 20 5.3 11.55H18.7L18.05 20Z"/>
    </Icon>
  )
});

export default IconMaterialTakeoutDiningSharpFilled;
