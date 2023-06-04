import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4Filled'

      short_name='FormatH4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h2v4h4V7h2v10H9v-4H5v4Zm15 0v-3h-5V7h2v5h3V7h2v5h2v2h-2v3Z"/>
    </Icon>
  );
});

IconMaterialFormatH4Filled.displayName = 'AmauiIconMaterialFormatH4Filled';

export default IconMaterialFormatH4Filled;
