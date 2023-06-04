import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneW100'

      short_name='Smartphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 21.7q-.65 0-1.075-.425Q6.3 20.85 6.3 20.2V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075v16.4q0 .65-.425 1.075-.425.425-1.075.425ZM7 18.65h10V5.35H7Zm0 .7v.85q0 .3.25.55.25.25.55.25h8.4q.3 0 .55-.25.25-.25.25-.55v-.85Zm0-14.7h10V3.8q0-.3-.25-.55Q16.5 3 16.2 3H7.8q-.3 0-.55.25Q7 3.5 7 3.8ZM7 3v1.65V3Zm0 18v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneW100.displayName = 'AmauiIconMaterialSmartphoneW100';

export default IconMaterialSmartphoneW100;
