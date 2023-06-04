import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatClear = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClear'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 10.35-2.325-2.325L7.85 5H20v3h-5.8Zm6.6 12.25-8.3-8.3-2 4.7H6.225L9.2 12 1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialFormatClear.displayName = 'AmauiIconMaterialFormatClear';

export default IconMaterialFormatClear;
