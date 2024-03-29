import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kPlus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlus'

      short_name='4kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5Zm-5 1H13v-2.25L14.75 15h1.825l-2.325-3 2.325-3H14.75L13 11.25V9h-1.5Zm-6-1.5h3V15H10v-1.5h1V12h-1V9H8.5v3H7V9H5.5ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterial4kPlus.displayName = 'AmauiIconMaterial4kPlus';

export default IconMaterial4kPlus;
