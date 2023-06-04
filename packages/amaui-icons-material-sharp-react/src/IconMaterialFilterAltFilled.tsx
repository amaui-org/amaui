import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltFilled'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13v7h-4v-7L2.95 4h18.1Z"/>
    </Icon>
  );
});

IconMaterialFilterAltFilled.displayName = 'AmauiIconMaterialFilterAltFilled';

export default IconMaterialFilterAltFilled;
