import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial11mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='11mpFilled'

      short_name='11mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 11.5H11v-6H8V7h1.5Zm5 0H16v-6h-3V7h1.5ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial11mpFilled.displayName = 'AmauiIconMaterial11mpFilled';

export default IconMaterial11mpFilled;
