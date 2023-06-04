import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRight'

      short_name='FormatImageRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4v-2h6v2Zm0-4v-2h6v2Zm0-4V7h6v2Zm0-4V3h18v2Zm8 12V7h10v10Zm2-2h6V9h-6Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRight.displayName = 'AmauiIconMaterialFormatImageRight';

export default IconMaterialFormatImageRight;
