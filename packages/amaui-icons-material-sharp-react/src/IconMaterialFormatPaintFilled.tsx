import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatPaintFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintFilled'

      short_name='FormatPaint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22v-6H4V7q0-1.65 1.175-2.825Q6.35 3 8 3h12v13h-5v6ZM6 10h12V5h-1v4h-2V5h-1v2h-2V5H8q-.825 0-1.412.588Q6 6.175 6 7Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintFilled.displayName = 'AmauiIconMaterialFormatPaintFilled';

export default IconMaterialFormatPaintFilled;
