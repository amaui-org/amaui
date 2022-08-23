import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpRoundedFilled'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M6.7 14.7Q6.425 14.425 6.425 14Q6.425 13.575 6.7 13.3L11.3 8.7Q11.45 8.55 11.625 8.487Q11.8 8.425 12 8.425Q12.2 8.425 12.388 8.5Q12.575 8.575 12.7 8.7L17.3 13.3Q17.575 13.575 17.575 14Q17.575 14.425 17.3 14.7Q17.025 14.975 16.6 14.975Q16.175 14.975 15.9 14.7L12 10.8L8.1 14.7Q7.825 14.975 7.4 14.975Q6.975 14.975 6.7 14.7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpRoundedFilled.displayName = 'AmauiIconMaterialKeyboardArrowUpRoundedFilled';

export default IconMaterialKeyboardArrowUpRoundedFilled;
