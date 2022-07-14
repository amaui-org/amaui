import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadSharpFilled'
      short_name='SimCardDownload'

      {...props}
    >
      <path d="M4 22V8L10 2H20V22ZM12 17 16 13 14.6 11.6 13 13.15V9H11V13.15L9.4 11.6L8 13Z"/>
    </Icon>
  );
});

export default IconMaterialSimCardDownloadSharpFilled;
