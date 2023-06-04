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
      <path d="m7 14 5-5 5 5Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUpFilled.displayName = 'AmauiIconMaterialArrowDropUpFilled';

export default IconMaterialArrowDropUpFilled;
