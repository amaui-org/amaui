import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4kPlusFilled'

      short_name='4kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5Zm-5 1H13v-2.25L14.75 15h1.75l-2.25-3 2.25-3h-1.75L13 11.25V9h-1.5Zm-6-1.5h3V15H10v-1.5h1V12h-1V9H8.5v3H7V9H5.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial4kPlusFilled.displayName = 'AmauiIconMaterial4kPlusFilled';

export default IconMaterial4kPlusFilled;
