import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataTwoTone'
      short_name='HMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,11H9V7H7v10h2v-4h6v4h2V7h-2V11z"/></g></g>
    </Icon>
  );
});

IconMaterialHMobiledataTwoTone.displayName = 'AmauiIconMaterialHMobiledataTwoTone';

export default IconMaterialHMobiledataTwoTone;
