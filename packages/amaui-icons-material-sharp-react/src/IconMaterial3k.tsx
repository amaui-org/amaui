import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3k = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3k'

      short_name='3k'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3 2.325-3H16.25l-1.75 2.25V9H13Zm-6.5 0H11V9H6.5v1.5h3v1h-2v1h2v1h-3ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial3k.displayName = 'AmauiIconMaterial3k';

export default IconMaterial3k;
