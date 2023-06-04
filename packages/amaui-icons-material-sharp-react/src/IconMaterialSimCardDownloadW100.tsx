import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V8.55l5.25-5.25h8.15v17.4ZM6 20h12V4h-7.15L6 8.85Zm6-4.15 3.1-3.1-.5-.5-2.25 2.2v-4.8h-.7v4.8l-2.25-2.2-.5.5ZM6 20h12Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100.displayName = 'AmauiIconMaterialSimCardDownloadW100';

export default IconMaterialSimCardDownloadW100;
