import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextClipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipW100'

      short_name='FormatTextClip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 19.35V4.65h.7v14.7Zm12.5 0v-7H9.1v-.7h8.8v-7h.7v14.7Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipW100.displayName = 'AmauiIconMaterialFormatTextClipW100';

export default IconMaterialFormatTextClipW100;
