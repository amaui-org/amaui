import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scan'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976V776h80v120h480V776h80v200H160Zm0-440V176h400l240 240v120h-80v-80H520V256H240v280h-80ZM40 696v-80h880v80H40Zm440-160Zm0 240Z"/>
    </Icon>
  );
});

IconMaterialScan.displayName = 'AmauiIconMaterialScan';

export default IconMaterialScan;
