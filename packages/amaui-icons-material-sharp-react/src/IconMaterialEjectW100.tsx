import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEjectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectW100'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.15v-.6h11v.6Zm.1-3.6L12 6.5l5.4 8.05Zm5.4-.6Zm-4.15 0h8.3L12 7.75Z"/>
    </Icon>
  );
});

IconMaterialEjectW100.displayName = 'AmauiIconMaterialEjectW100';

export default IconMaterialEjectW100;
