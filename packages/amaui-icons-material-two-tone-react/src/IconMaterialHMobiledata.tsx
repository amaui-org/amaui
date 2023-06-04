import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledata'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z"/></g></g>
    </Icon>
  );
});

IconMaterialHMobiledata.displayName = 'AmauiIconMaterialHMobiledata';

export default IconMaterialHMobiledata;
