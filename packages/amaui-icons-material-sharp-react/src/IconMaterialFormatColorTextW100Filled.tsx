import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorTextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorTextW100Filled'

      short_name='FormatColorText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-1.4h20V21Zm4.45-5.05 5.3-12.7h.5l5.3 12.7h-.85l-1.5-3.65H8.7l-1.5 3.65Zm2.5-4.3h6l-2.9-7.1h-.15Z"/>
    </Icon>
  );
});

IconMaterialFormatColorTextW100Filled.displayName = 'AmauiIconMaterialFormatColorTextW100Filled';

export default IconMaterialFormatColorTextW100Filled;
