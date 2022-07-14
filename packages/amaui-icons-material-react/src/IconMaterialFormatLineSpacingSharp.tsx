import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingSharp'
      short_name='FormatLineSpacing'

      {...props}
    >
      <path d="M12 7V5H22V7ZM12 13V11H22V13ZM12 19V17H22V19ZM6 20 2 16 3.4 14.6 5 16.15V7.85L3.4 9.4L2 8L6 4L10 8L8.6 9.4L7 7.85V16.15L8.6 14.6L10 16Z"/>
    </Icon>
  );
});

export default IconMaterialFormatLineSpacingSharp;
