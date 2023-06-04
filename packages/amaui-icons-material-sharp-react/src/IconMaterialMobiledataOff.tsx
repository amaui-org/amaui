import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMobiledataOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobiledataOff'

      short_name='MobiledataOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.8 22.6 10 12.8v4.35l1.55-1.55L13 17l-4 4-4-4 1.45-1.4L8 17.15V10.8L1.4 4.2l1.4-1.4 18.4 18.4ZM16 13.15l-2-2V6.8l-1.6 1.6L11 7l4-4 4 4-1.4 1.4L16 6.8Z"/>
    </Icon>
  );
});

IconMaterialMobiledataOff.displayName = 'AmauiIconMaterialMobiledataOff';

export default IconMaterialMobiledataOff;
