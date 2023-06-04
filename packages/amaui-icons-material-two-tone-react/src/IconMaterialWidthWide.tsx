import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWide'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><rect height="12" opacity=".3" width="8" x="8" y="6"/><path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M6,18H4V6h2V18z M16,18H8V6h8V18z M20,18h-2V6h2V18z"/></g></g>
    </Icon>
  );
});

IconMaterialWidthWide.displayName = 'AmauiIconMaterialWidthWide';

export default IconMaterialWidthWide;
