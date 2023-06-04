import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentIncrease'

      short_name='FormatIndentIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-5V8l4 4ZM3 5V3h18v2Zm8 12v-2h10v2Zm0-4v-2h10v2Zm0-4V7h10v2Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentIncrease.displayName = 'AmauiIconMaterialFormatIndentIncrease';

export default IconMaterialFormatIndentIncrease;
