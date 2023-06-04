import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateAltW100'

      short_name='SystemUpdateAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h5.35V6H4v12h16V6h-4.65v-.7h5.35v13.4Zm8.7-3.95-4.1-4.1.5-.5 3.25 3.25V5.3h.7v8.1l3.25-3.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateAltW100.displayName = 'AmauiIconMaterialSystemUpdateAltW100';

export default IconMaterialSystemUpdateAltW100;
