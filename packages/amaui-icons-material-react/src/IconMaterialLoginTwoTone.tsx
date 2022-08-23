import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLoginTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LoginTwoTone'
      short_name='Login'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g>
    </Icon>
  );
});

IconMaterialLoginTwoTone.displayName = 'AmauiIconMaterialLoginTwoTone';

export default IconMaterialLoginTwoTone;
