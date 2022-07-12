import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderOffSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderOffSharpW700Filled'
      short_name='FolderOff'

      {...props}
    >
      <path d="M22.85 19.7 5.9 2.775H9.625L12 5.15H22.85ZM20.8 23.825 17.8 20.85H1.15V4.2L0.175 3.2L1.825 1.525L22.475 22.175Z"/>
    </Icon>
  )
});

export default IconMaterialFolderOffSharpW700Filled;
