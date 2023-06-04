import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowUpwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardFilled'

      short_name='ArrowUpward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardFilled.displayName = 'AmauiIconMaterialArrowUpwardFilled';

export default IconMaterialArrowUpwardFilled;
