import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1W100'

      short_name='FormatH1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 16.35v-8.7H7v4h5.3v-4h.7v8.7h-.7v-4H7v4Zm10.7 0v-8h-2v-.7h2.7v8.7Z"/>
    </Icon>
  );
});

IconMaterialFormatH1W100.displayName = 'AmauiIconMaterialFormatH1W100';

export default IconMaterialFormatH1W100;
