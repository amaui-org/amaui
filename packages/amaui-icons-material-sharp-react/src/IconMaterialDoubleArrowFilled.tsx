import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoubleArrowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoubleArrowFilled'

      short_name='DoubleArrow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.05 19 5-7-5-7H8.5l5 7-5 7ZM12 19l5-7-5-7h2.45l5 7-5 7Z"/>
    </Icon>
  );
});

IconMaterialDoubleArrowFilled.displayName = 'AmauiIconMaterialDoubleArrowFilled';

export default IconMaterialDoubleArrowFilled;
