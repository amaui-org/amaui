import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadSharpW700'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 15.3 5.8 9.125 8.025 6.9 10.425 9.325V1.65H13.575V9.325L15.975 6.9L18.2 9.125ZM2.35 21.6V13.925H5.5V18.45H18.45V13.925H21.6V21.6Z"/>
    </Icon>
  )
});

export default IconMaterialFileDownloadSharpW700;
