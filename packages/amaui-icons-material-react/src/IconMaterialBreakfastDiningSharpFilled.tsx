import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningSharpFilled'
      short_name='BreakfastDining'

      {...props}
    >
      <path d="M4 21V10.45Q3.075 9.9 2.538 8.987Q2 8.075 2 7Q2 5.35 3.175 4.175Q4.35 3 6 3H18Q19.65 3 20.825 4.175Q22 5.35 22 7Q22 8.075 21.462 8.987Q20.925 9.9 20 10.45V21ZM12 17.4 16.4 13 12 8.6 7.6 13ZM12 14.6 10.4 13 12 11.4 13.6 13Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningSharpFilled.displayName = 'AmauiIconMaterialBreakfastDiningSharpFilled';

export default IconMaterialBreakfastDiningSharpFilled;
