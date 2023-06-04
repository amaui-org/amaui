import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeRightAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeRightAltW100'

      short_name='SwipeRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.35q-1.8 0-3.075-1.275Q4.65 13.8 4.65 12q0-1.8 1.275-3.075Q7.2 7.65 9 7.65q1.725 0 2.95 1.137 1.225 1.138 1.4 2.863h6.375l-2-2q-.125-.125-.112-.25.012-.125.112-.25.125-.125.263-.125.137 0 .262.125l2.325 2.325q.125.125.163.25.037.125.037.275 0 .15-.037.275-.038.125-.163.25l-2.35 2.325q-.125.125-.25.112-.125-.012-.25-.137-.1-.125-.112-.25-.013-.125.112-.25l2-1.975H13.35q-.175 1.725-1.4 2.863Q10.725 16.35 9 16.35Zm0-.7q1.5 0 2.575-1.075Q12.65 13.5 12.65 12q0-1.5-1.075-2.575Q10.5 8.35 9 8.35q-1.5 0-2.575 1.075Q5.35 10.5 5.35 12q0 1.5 1.075 2.575Q7.5 15.65 9 15.65ZM9 12Z"/>
    </Icon>
  );
});

IconMaterialSwipeRightAltW100.displayName = 'AmauiIconMaterialSwipeRightAltW100';

export default IconMaterialSwipeRightAltW100;
