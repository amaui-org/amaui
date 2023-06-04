import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseSidingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingFilled'

      short_name='HouseSiding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-8H2l10-9 10 9h-3v8h-2v-2H7v2ZM9.45 8h5.1L12 5.7ZM7 12h10v-1.8l-.225-.2h-9.55L7 10.2Zm0 4h10v-2H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingFilled.displayName = 'AmauiIconMaterialHouseSidingFilled';

export default IconMaterialHouseSidingFilled;
