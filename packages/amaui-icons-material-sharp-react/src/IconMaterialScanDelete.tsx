import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDelete'

      short_name='ScanDelete'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 256v200-200 640-9.5 9.5-640Zm-80 720V176h400l240 240v174q-19-7-39-10.5t-41-3.5V456H520V256H240v640h254q8 23 20 43t28 37H160Zm476-20-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialScanDelete.displayName = 'AmauiIconMaterialScanDelete';

export default IconMaterialScanDelete;
