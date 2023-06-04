import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolymerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolymerW100'

      short_name='Polymer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.35 18.4 2.8 12l3.6-6.4h3.2L6 12l2.1 3.7 6.2-10.1h3.3l3.6 6.4-3.6 6.4h-3.2L18 12l-2.1-3.7-6.2 10.1Z"/>
    </Icon>
  );
});

IconMaterialPolymerW100.displayName = 'AmauiIconMaterialPolymerW100';

export default IconMaterialPolymerW100;
