import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodW100'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 11.1v-.7h7.2v.7Zm1 3v-.7h5.2v.7Zm-3.1 7.6V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAodW100.displayName = 'AmauiIconMaterialAodW100';

export default IconMaterialAodW100;
