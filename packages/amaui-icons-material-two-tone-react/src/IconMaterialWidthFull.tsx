import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFull'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="12" opacity=".3" width="10" x="7" y="6"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M5,18H4V6h1V18z M17,18H7V6h10V18z M20,18h-1V6h1V18z"/></g></g>
    </Icon>
  );
});

IconMaterialWidthFull.displayName = 'AmauiIconMaterialWidthFull';

export default IconMaterialWidthFull;
