import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeft'

      short_name='FormatImageLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4V7h10v10ZM3 5V3h18v2Zm2 10h6V9H5Zm10 2v-2h6v2Zm0-4v-2h6v2Zm0-4V7h6v2Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeft.displayName = 'AmauiIconMaterialFormatImageLeft';

export default IconMaterialFormatImageLeft;
