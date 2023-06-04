import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledata'

      short_name='EMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M16,9V7H8v10h8v-2h-6v-2h6v-2h-6V9H16z"/></g></g>
    </Icon>
  );
});

IconMaterialEMobiledata.displayName = 'AmauiIconMaterialEMobiledata';

export default IconMaterialEMobiledata;
