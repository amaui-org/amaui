import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDetails = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Details'

      short_name='Details'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z" opacity=".3"/><path d="M12,3L2,21h20L12,3z M13,8.92L18.6,19H13V8.92z M11,8.92V19H5.4L11,8.92z"/>
    </Icon>
  );
});

IconMaterialDetails.displayName = 'AmauiIconMaterialDetails';

export default IconMaterialDetails;
