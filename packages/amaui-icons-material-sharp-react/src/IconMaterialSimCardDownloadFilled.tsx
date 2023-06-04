import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadFilled'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8l6-6h10v20Zm8-5 4-4-1.4-1.4-1.6 1.55V9h-2v4.15L9.4 11.6 8 13Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadFilled.displayName = 'AmauiIconMaterialSimCardDownloadFilled';

export default IconMaterialSimCardDownloadFilled;
