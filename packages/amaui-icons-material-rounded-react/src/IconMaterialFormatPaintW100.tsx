import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatPaintW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatPaintW100'

      short_name='FormatPaint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75v3.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.4h-2V6.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V4.75H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm.8 3.2h10q.35 0 .575-.225.225-.225.225-.575v-1.7H6.2v1.7q0 .35.225.575.225.225.575.225Zm-.8-2.5v2.5V12.95Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100.displayName = 'AmauiIconMaterialFormatPaintW100';

export default IconMaterialFormatPaintW100;
