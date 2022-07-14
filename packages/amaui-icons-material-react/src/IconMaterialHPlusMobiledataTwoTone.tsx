import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataTwoTone'
      short_name='HPlusMobiledata'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,11H6V7H4v10h2v-4h6v4h2V7h-2V11z M22,11h-2V9h-2v2h-2v2h2v2h2v-2h2V11z"/></g></g>
    </Icon>
  );
});

export default IconMaterialHPlusMobiledataTwoTone;
