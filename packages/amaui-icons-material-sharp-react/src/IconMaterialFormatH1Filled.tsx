import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1Filled'

      short_name='FormatH1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 17V7h2v4h4V7h2v10h-2v-4H7v4Zm12 0V9h-2V7h4v10Z"/>
    </Icon>
  );
});

IconMaterialFormatH1Filled.displayName = 'AmauiIconMaterialFormatH1Filled';

export default IconMaterialFormatH1Filled;
