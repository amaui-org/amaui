import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQrCodeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QrCodeSharp'
      short_name='QrCode'

      {...props}
    >
      <path d="M3 11V3H11V11ZM5 9H9V5H5ZM3 21V13H11V21ZM5 19H9V15H5ZM13 11V3H21V11ZM15 9H19V5H15ZM19 21V19H21V21ZM13 15V13H15V15ZM15 17V15H17V17ZM13 19V17H15V19ZM15 21V19H17V21ZM17 19V17H19V19ZM17 15V13H19V15ZM19 17V15H21V17Z"/>
    </Icon>
  )
});

export default IconMaterialQrCodeSharp;
