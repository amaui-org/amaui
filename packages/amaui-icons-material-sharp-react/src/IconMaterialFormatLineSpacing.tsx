import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacing'

      short_name='FormatLineSpacing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 20-4-4 1.4-1.4L5 16.15v-8.3L3.4 9.4 2 8l4-4 4 4-1.4 1.4L7 7.85v8.3l1.6-1.55L10 16Zm6-1v-2h10v2Zm0-6v-2h10v2Zm0-6V5h10v2Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacing.displayName = 'AmauiIconMaterialFormatLineSpacing';

export default IconMaterialFormatLineSpacing;
