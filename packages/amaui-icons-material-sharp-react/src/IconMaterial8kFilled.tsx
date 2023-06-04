import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial8kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='8kFilled'

      short_name='8k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-6.5 0H11V9H6.5ZM8 11.5V10h1.5v1.5ZM8 14v-1.5h1.5V14Zm-5 7V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial8kFilled.displayName = 'AmauiIconMaterial8kFilled';

export default IconMaterial8kFilled;
