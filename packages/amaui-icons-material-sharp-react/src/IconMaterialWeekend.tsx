import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Weekend'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V9h3V4h16v5h3v11Zm6-6h10V9h1V6H6v3h1Zm-4 4h18v-7h-2v5H5v-5H3Zm9-2Zm0-2Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialWeekend.displayName = 'AmauiIconMaterialWeekend';

export default IconMaterialWeekend;
