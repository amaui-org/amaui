import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Expand'

      short_name='Expand'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M4,20h16v2H4V20z M4,2h16v2H4V2z M13,9h3l-4-4L8,9h3v6H8l4,4l4-4h-3V9z"/></g>
    </Icon>
  );
});

IconMaterialExpand.displayName = 'AmauiIconMaterialExpand';

export default IconMaterialExpand;
