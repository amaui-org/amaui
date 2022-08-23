import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobiledataOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOffSharp'
      short_name='MobiledataOff'

      {...props}
    >
      <path d="M16 13.15 14 11.15V6.8L12.4 8.4L11 7L15 3L19 7L17.6 8.4L16 6.8ZM19.8 22.6 10 12.8V17.15L11.55 15.6L13 17L9 21L5 17L6.45 15.6L8 17.15V10.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOffSharp.displayName = 'AmauiIconMaterialMobiledataOffSharp';

export default IconMaterialMobiledataOffSharp;
