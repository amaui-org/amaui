import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVitalsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VitalsW100'

      short_name='Vitals'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 12.35v-.7h5.1l2.1 5.25 4.9-11.65 2.65 6.4h4.6v.7h-5.1l-2.15-5.275-4.925 11.65L6.95 12.35Z"/>
    </Icon>
  );
});

IconMaterialVitalsW100.displayName = 'AmauiIconMaterialVitalsW100';

export default IconMaterialVitalsW100;
