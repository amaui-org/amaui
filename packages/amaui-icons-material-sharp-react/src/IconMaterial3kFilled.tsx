import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3kFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3kFilled'

      short_name='3k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13Zm-6.5 0H11V9H6.5v1.5h3v1h-2v1h2v1h-3ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial3kFilled.displayName = 'AmauiIconMaterial3kFilled';

export default IconMaterial3kFilled;
