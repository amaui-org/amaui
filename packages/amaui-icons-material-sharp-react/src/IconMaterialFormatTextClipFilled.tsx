import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextClipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipFilled'

      short_name='FormatTextClip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V4h2v16Zm14 0v-7H8v-2h10V4h2v16Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipFilled.displayName = 'AmauiIconMaterialFormatTextClipFilled';

export default IconMaterialFormatTextClipFilled;
