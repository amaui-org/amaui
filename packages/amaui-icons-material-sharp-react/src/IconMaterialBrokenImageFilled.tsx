import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageFilled'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 12.575-3-3V3h18v8.575l-3-3-4 4-4-4ZM3 21v-8.6l3 3 4-4 4 4 4-4 3 3V21Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageFilled.displayName = 'AmauiIconMaterialBrokenImageFilled';

export default IconMaterialBrokenImageFilled;
