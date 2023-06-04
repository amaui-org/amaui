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
      <path d="M10.3 20.95v-6.5H5.5v-8.2q0-.9.65-1.55t1.55-.65h10.8v10.4h-4.8v6.5Zm-4.1-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm0 3.2h11.6v-2.5H6.2Zm0 0v-2.5 2.5Z"/>
    </Icon>
  );
});

IconMaterialFormatPaintW100.displayName = 'AmauiIconMaterialFormatPaintW100';

export default IconMaterialFormatPaintW100;
