import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorText = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorText'

      short_name='FormatColorText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-4h20v4Zm3.5-7 5.25-14h2.5l5.25 14h-2.4l-1.25-3.6H9.2L7.9 14Zm4.4-5.6h4.2l-2.05-5.8h-.1Z"/>
    </Icon>
  );
});

IconMaterialFormatColorText.displayName = 'AmauiIconMaterialFormatColorText';

export default IconMaterialFormatColorText;
