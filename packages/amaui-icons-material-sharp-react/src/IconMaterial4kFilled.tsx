import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kFilled'

      short_name='4k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-6.5-1.5h3V15H11v-1.5h1V12h-1V9H9.5v3H8V9H6.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial4kFilled.displayName = 'AmauiIconMaterial4kFilled';

export default IconMaterial4kFilled;
