import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDetailsTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetailsTwoTone'
      short_name='Details'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z" opacity=".3"/><path d="M12,3L2,21h20L12,3z M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z"/>
    </Icon>
  );
});

IconMaterialDetailsTwoTone.displayName = 'AmauiIconMaterialDetailsTwoTone';

export default IconMaterialDetailsTwoTone;
