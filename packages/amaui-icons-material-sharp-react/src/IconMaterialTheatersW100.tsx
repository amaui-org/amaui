import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheatersW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheatersW100'

      short_name='Theaters'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 20.35V3.65h.7v2h3.3v-2h6.7v2h3.3v-2h.7v16.7h-.7v-2h-3.3v2h-6.7v-2h-3.3v2Zm.7-2.7h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm10 8h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm0-4h3.3v-3.3h-3.3Zm-6 10h5.3V4.35h-5.3Zm0-15.3h5.3Z"/>
    </Icon>
  );
});

IconMaterialTheatersW100.displayName = 'AmauiIconMaterialTheatersW100';

export default IconMaterialTheatersW100;
