import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowercaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowercaseW100'

      short_name='Lowercase'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M330-262q-45 0-72.5-25.5T230-350q0-42 33-66.5t85-24.5q21 0 43 4.5t39 12.5v-27q0-42-19.5-63T352-535q-20 0-37.5 6.5T278-508l-19-19q22-18 44-26t49-8q54 0 80 28.5t26 85.5v176h-28v-42h-4q-18 26-40.5 38.5T330-262Zm0-26q43 0 71.5-31t28.5-79q-14-8-36-12.5t-43-4.5q-42 0-67 16.5T259-350q0 26 19.5 44t51.5 18Zm346 26L552-386l20-20 90 90v-292h28v292l90-90 20 20-124 124Z"/>
    </Icon>
  );
});

IconMaterialLowercaseW100.displayName = 'AmauiIconMaterialLowercaseW100';

export default IconMaterialLowercaseW100;
