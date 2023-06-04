import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4W100Filled'

      short_name='FormatH4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.35v-8.7H5v4h5.3v-4h.7v8.7h-.7v-4H5v4Zm13.7 0v-3h-5v-5.7h.7v5H18v-5h.7v5h2v.7h-2v3Z"/>
    </Icon>
  );
});

IconMaterialFormatH4W100Filled.displayName = 'AmauiIconMaterialFormatH4W100Filled';

export default IconMaterialFormatH4W100Filled;
