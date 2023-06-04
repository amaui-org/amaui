import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownloadW100Filled'

      short_name='CloudDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.1 1.738-3.475Q9.575 5.45 11.65 5.3v8.4L9.7 11.75q-.1-.1-.237-.113-.138-.012-.263.113t-.125.25q0 .125.125.25l2.275 2.275q.225.225.525.225.3 0 .525-.225L14.8 12.25q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-1.95 1.95V5.3q2.25.25 3.8 1.838Q17.7 8.725 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Z"/>
    </Icon>
  );
});

IconMaterialCloudDownloadW100Filled.displayName = 'AmauiIconMaterialCloudDownloadW100Filled';

export default IconMaterialCloudDownloadW100Filled;
