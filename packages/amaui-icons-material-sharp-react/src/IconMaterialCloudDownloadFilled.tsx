import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDownloadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadFilled'

      short_name='CloudDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.575-2.025 2.138-3.4Q8.95 4.375 11 4.075v8.075L9.4 10.6 8 12l4 4 4-4-1.4-1.4-1.6 1.55V4.075q2.575.35 4.288 2.312Q19 8.35 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadFilled.displayName = 'AmauiIconMaterialCloudDownloadFilled';

export default IconMaterialCloudDownloadFilled;
