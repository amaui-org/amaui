import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4'

      short_name='Man4'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M13.75,7h-3.5C9.04,7,8.11,8.07,8.27,9.26L10,22h4l1.73-12.74C15.89,8.07,14.96,7,13.75,7z"/><circle cx="12" cy="4" r="2"/></g></g>
    </Icon>
  );
});

IconMaterialMan4.displayName = 'AmauiIconMaterialMan4';

export default IconMaterialMan4;
