import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeDownAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeDownAltW100'

      short_name='SwipeDownAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.775q-.15 0-.275-.05-.125-.05-.25-.175L9.15 18.225q-.1-.1-.112-.237-.013-.138.112-.263t.25-.125q.125 0 .25.125l2 2V13.35q-1.725-.175-2.862-1.4Q7.65 10.725 7.65 9q0-1.8 1.275-3.075Q10.2 4.65 12 4.65q1.8 0 3.075 1.275Q16.35 7.2 16.35 9q0 1.725-1.137 2.95-1.138 1.225-2.863 1.4v6.375l2-2q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Zm0-8.125q1.5 0 2.575-1.075Q15.65 10.5 15.65 9q0-1.5-1.075-2.575Q13.5 5.35 12 5.35q-1.5 0-2.575 1.075Q8.35 7.5 8.35 9q0 1.5 1.075 2.575Q10.5 12.65 12 12.65ZM12 9Z"/>
    </Icon>
  );
});

IconMaterialSwipeDownAltW100.displayName = 'AmauiIconMaterialSwipeDownAltW100';

export default IconMaterialSwipeDownAltW100;
