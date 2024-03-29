import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial6mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='6mpFilled'

      short_name='6mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.5h4.5V8h-3V7h3V5.5H10Zm1.5-1V9H13v1.5ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial6mpFilled.displayName = 'AmauiIconMaterial6mpFilled';

export default IconMaterial6mpFilled;
