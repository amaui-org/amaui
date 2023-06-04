import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneFilled'

      short_name='Smartphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneFilled.displayName = 'AmauiIconMaterialSmartphoneFilled';

export default IconMaterialSmartphoneFilled;
