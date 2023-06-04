import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextdirectionLToRFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextdirectionLToRFilled'

      short_name='FormatTextdirectionLToR'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15v-5q-1.65 0-2.825-1.175Q5 7.65 5 6q0-1.65 1.175-2.825Q7.35 2 9 2h8v2h-2v11h-2V4h-2v11Zm8 7-1.4-1.4 1.6-1.6H3v-2h14.2l-1.6-1.6L17 14l4 4Z"/>
    </Icon>
  );
});

IconMaterialFormatTextdirectionLToRFilled.displayName = 'AmauiIconMaterialFormatTextdirectionLToRFilled';

export default IconMaterialFormatTextdirectionLToRFilled;
