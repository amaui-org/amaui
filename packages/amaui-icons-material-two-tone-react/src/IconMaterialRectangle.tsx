import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRectangle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Rectangle'

      short_name='Rectangle'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g opacity=".3"><rect height="12" width="16" x="4" y="6"/></g><g><path d="M2,4v16h20V4H2z M20,18H4V6h16V18z"/></g></g>
    </Icon>
  );
});

IconMaterialRectangle.displayName = 'AmauiIconMaterialRectangle';

export default IconMaterialRectangle;
