import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxRoundedFilled'
      short_name='HomeMax'

      {...props}
    >
      <path d="M8 19Q7.575 19 7.287 18.712Q7 18.425 7 18H5Q3.35 18 2.175 16.825Q1 15.65 1 14V9Q1 7.35 2.175 6.175Q3.35 5 5 5H19Q20.65 5 21.825 6.175Q23 7.35 23 9V14Q23 15.65 21.825 16.825Q20.65 18 19 18H17Q17 18.425 16.712 18.712Q16.425 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxRoundedFilled.displayName = 'AmauiIconMaterialHomeMaxRoundedFilled';

export default IconMaterialHomeMaxRoundedFilled;
