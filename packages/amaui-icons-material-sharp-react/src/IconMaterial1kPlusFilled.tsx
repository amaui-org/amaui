import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1kPlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kPlusFilled'

      short_name='1kPlus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.5 14h1v-1.5H19v-1h-1.5V10h-1v1.5H15v1h1.5Zm-6 1H12v-2.25L13.75 15h1.75l-2.25-3 2.25-3h-1.75L12 11.25V9h-1.5Zm-3 0H9V9H6v1.5h1.5ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterial1kPlusFilled.displayName = 'AmauiIconMaterial1kPlusFilled';

export default IconMaterial1kPlusFilled;
