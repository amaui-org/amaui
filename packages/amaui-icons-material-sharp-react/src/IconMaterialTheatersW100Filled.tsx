import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheatersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersW100Filled'

      short_name='Theaters'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.35V3.65h.7v2h3.3v-2h6.7v2h3.3v-2h.7v16.7h-.7v-2h-3.3v2h-6.7v-2h-3.3v2Zm.7-2.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm10 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Z"/>
    </Icon>
  );
});

IconMaterialTheatersW100Filled.displayName = 'AmauiIconMaterialTheatersW100Filled';

export default IconMaterialTheatersW100Filled;
