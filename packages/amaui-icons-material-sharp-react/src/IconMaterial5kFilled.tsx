import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial5kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5kFilled'

      short_name='5k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-6.5 0H11v-3.5H8v-1h3V9H6.5v3.5h3v1h-3ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial5kFilled.displayName = 'AmauiIconMaterial5kFilled';

export default IconMaterial5kFilled;
