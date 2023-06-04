import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltFilled'

      short_name='ListAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h2v-2H7Zm0-4h2v-2H7Zm0-4h2V7H7Zm4 8h6v-2h-6Zm0-4h6v-2h-6Zm0-4h6V7h-6ZM3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialListAltFilled.displayName = 'AmauiIconMaterialListAltFilled';

export default IconMaterialListAltFilled;
