import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughW100Filled'

      short_name='FormatStrikethrough'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 13.35v-.7h17.7v.7Zm8.5-2.7v-4.8h-5.5v-.7h11.7v.7h-5.5v4.8Zm0 8.2v-3.5h.7v3.5Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughW100Filled.displayName = 'AmauiIconMaterialFormatStrikethroughW100Filled';

export default IconMaterialFormatStrikethroughW100Filled;
