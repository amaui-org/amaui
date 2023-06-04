import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeW100'

      short_name='MagnificationLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 14.35h10.7v-6.7H5.65ZM3.3 18.7V5.3h17.4v13.4ZM4 18V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeW100.displayName = 'AmauiIconMaterialMagnificationLargeW100';

export default IconMaterialMagnificationLargeW100;
