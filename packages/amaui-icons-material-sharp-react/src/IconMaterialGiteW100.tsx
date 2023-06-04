import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGiteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GiteW100'

      short_name='Gite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.675V10.9l3.6-3.6h1.4V5.9H9v1.4h8.1l3.6 3.6v6.775Zm11.4-.7H20V11.2l-2.625-2.625L14.7 11.25Zm-10.7 0h10V12H4Z"/>
    </Icon>
  );
});

IconMaterialGiteW100.displayName = 'AmauiIconMaterialGiteW100';

export default IconMaterialGiteW100;
