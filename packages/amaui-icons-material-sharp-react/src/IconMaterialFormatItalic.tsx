import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatItalic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalic'

      short_name='FormatItalic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20v-3h3.375l4-10H9V4h10v3h-3.375l-4 10H15v3Z"/>
    </Icon>
  );
});

IconMaterialFormatItalic.displayName = 'AmauiIconMaterialFormatItalic';

export default IconMaterialFormatItalic;
