import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6kFilled'

      short_name='6k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-5-3.5v-1h3V9H6.5v6H11v-3.5ZM8 14v-1.5h1.5V14Zm-5 7V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial6kFilled.displayName = 'AmauiIconMaterial6kFilled';

export default IconMaterial6kFilled;
