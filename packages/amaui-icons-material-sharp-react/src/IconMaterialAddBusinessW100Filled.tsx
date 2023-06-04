import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBusinessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessW100Filled'

      short_name='AddBusiness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 21.7v-3h-3V18h3v-3h.7v3h3v.7h-3v3ZM3.6 19.35v-6H2.3v-.7l1.2-5h13.3l1.2 5v.7h-1.3v3.35H16v-3.35h-4.7v6Zm.7-.7h6.3v-5.3H4.3Zm-.8-13.3v-.7h13.3v.7Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessW100Filled.displayName = 'AmauiIconMaterialAddBusinessW100Filled';

export default IconMaterialAddBusinessW100Filled;
