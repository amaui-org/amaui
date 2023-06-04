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
      <path d="M10.3 20.95v-6.5H5.5v-8.2q0-.9.65-1.55t1.55-.65h10.8v10.4h-4.8v6.5Zm-4.1-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100Filled.displayName = 'AmauiIconMaterialFormatPaintW100Filled';

export default IconMaterialFormatPaintW100Filled;
