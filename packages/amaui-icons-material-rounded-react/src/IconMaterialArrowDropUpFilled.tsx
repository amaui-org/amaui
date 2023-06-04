import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUpFilled'

      short_name='ArrowDropUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 14q-.675 0-.937-.613-.263-.612.212-1.087l2.6-2.6q.15-.15.325-.225Q11.8 9.4 12 9.4t.375.075q.175.075.325.225l2.6 2.6q.475.475.212 1.087-.262.613-.937.613Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpFilled.displayName = 'AmauiIconMaterialArrowDropUpFilled';

export default IconMaterialArrowDropUpFilled;
