import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatSizeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatSizeW100'

      short_name='FormatSize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 18.85q-.15 0-.25-.1t-.1-.25V5.85H10.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.65V18.5q0 .15-.1.25t-.25.1Zm-9 0q-.15 0-.25-.1t-.1-.25v-7.65H3.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.85v7.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatSizeW100.displayName = 'AmauiIconMaterialFormatSizeW100';

export default IconMaterialFormatSizeW100;
