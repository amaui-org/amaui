import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial4gPlusMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gPlusMobiledataTwoTone'
      short_name='4gPlusMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M13,11v2h2v2h-4V9h6c0-1.1-0.9-2-2-2h-4C9.9,7,9,7.9,9,9v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2v-4H13z M24,11h-2V9h-2v2h-2 v2h2v2h2v-2h2V11z M7,7H5v5H3V7H1v7h4v3h2v-3h1v-2H7V7z"/></g></g>
    </Icon>
  );
});

IconMaterial4gPlusMobiledataTwoTone.displayName = 'AmauiIconMaterial4gPlusMobiledataTwoTone';

export default IconMaterial4gPlusMobiledataTwoTone;
