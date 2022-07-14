import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatClearSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClearSharp'
      short_name='FormatClear'

      {...props}
    >
      <path d="M13.2 10.35 10.875 8.025 7.85 5H20V8H14.2ZM19.8 22.6 11.5 14.3 9.5 19H6.225L9.2 12L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

export default IconMaterialFormatClearSharp;
