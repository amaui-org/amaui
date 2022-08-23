import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownRounded'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 14.975Q11.8 14.975 11.613 14.9Q11.425 14.825 11.3 14.7L6.7 10.1Q6.425 9.825 6.425 9.4Q6.425 8.975 6.7 8.7Q6.975 8.425 7.4 8.425Q7.825 8.425 8.1 8.7L12 12.6L15.9 8.7Q16.175 8.425 16.6 8.425Q17.025 8.425 17.3 8.7Q17.575 8.975 17.575 9.4Q17.575 9.825 17.3 10.1L12.7 14.7Q12.55 14.85 12.375 14.912Q12.2 14.975 12 14.975Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowDownRounded.displayName = 'AmauiIconMaterialKeyboardArrowDownRounded';

export default IconMaterialKeyboardArrowDownRounded;
