import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSheetsRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtl'

      short_name='SheetsRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13V1h16v12Zm2-7h5V3H6Zm7 0h5V3h-5Zm-7 5h5V8H6Zm7 0h5V8h-5ZM7 22l-4-4 4-4 1.4 1.4L6.825 17H20v2H6.825L8.4 20.6Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtl.displayName = 'AmauiIconMaterialSheetsRtl';

export default IconMaterialSheetsRtl;
