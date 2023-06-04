import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSosW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosW100'

      short_name='Sos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.4 15.85v-7.7h5.2v7.7Zm-6.75 0v-.7h3.5v-2.8h-3.5v-4.2h4.2v.7h-3.5v2.8h3.5v4.2Zm14.5 0v-.7h3.5v-2.8h-3.5v-4.2h4.2v.7h-3.5v2.8h3.5v4.2Zm-7.05-.7h3.8v-6.3h-3.8Z"/>
    </Icon>
  );
});

IconMaterialSosW100.displayName = 'AmauiIconMaterialSosW100';

export default IconMaterialSosW100;
