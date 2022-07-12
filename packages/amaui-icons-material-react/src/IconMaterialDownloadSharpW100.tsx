import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDownloadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DownloadSharpW100'
      short_name='Download'

      {...props}
    >
      <path d="M12 15 8.9 11.9 9.4 11.4 11.65 13.65V4.85H12.35V13.65L14.6 11.4L15.1 11.9ZM5.3 18.7V15H6V18H18V15H18.7V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialDownloadSharpW100;
