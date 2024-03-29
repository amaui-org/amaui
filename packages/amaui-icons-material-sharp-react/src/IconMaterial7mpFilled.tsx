import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial7mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='7mpFilled'

      short_name='7mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 11.5H13l1.85-6H10V7h2.6ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial7mpFilled.displayName = 'AmauiIconMaterial7mpFilled';

export default IconMaterial7mpFilled;
