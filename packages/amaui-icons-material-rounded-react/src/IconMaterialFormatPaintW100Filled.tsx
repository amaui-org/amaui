import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatPaintW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintW100Filled'

      short_name='FormatPaint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75v3.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.4h-2V6.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V4.75H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100Filled.displayName = 'AmauiIconMaterialFormatPaintW100Filled';

export default IconMaterialFormatPaintW100Filled;
