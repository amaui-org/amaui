import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextClip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClip'

      short_name='FormatTextClip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V4h2v16Zm14 0v-7H8v-2h10V4h2v16Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClip.displayName = 'AmauiIconMaterialFormatTextClip';

export default IconMaterialFormatTextClip;
