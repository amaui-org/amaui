import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataTwoTone'
      short_name='GMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,11v2h2v2H9V9h7c0-1.1-0.9-2-2-2H9C7.9,7,7,7.9,7,9v6c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2v-4H12z"/></g></g>
    </Icon>
  );
});

IconMaterialGMobiledataTwoTone.displayName = 'AmauiIconMaterialGMobiledataTwoTone';

export default IconMaterialGMobiledataTwoTone;
