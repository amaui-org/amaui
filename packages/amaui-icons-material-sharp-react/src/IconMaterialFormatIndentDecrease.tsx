import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatIndentDecrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatIndentDecrease'

      short_name='FormatIndentDecrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm8-4v-2h10v2Zm-4-1-4-4 4-4Zm4-3v-2h10v2Zm0-4V7h10v2ZM3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatIndentDecrease.displayName = 'AmauiIconMaterialFormatIndentDecrease';

export default IconMaterialFormatIndentDecrease;
