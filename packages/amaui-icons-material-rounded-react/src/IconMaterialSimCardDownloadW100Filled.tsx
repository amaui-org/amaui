import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadW100Filled'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.113-.575.112-.275.337-.5l4.35-4.35q.225-.225.5-.338.275-.112.575-.112H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm5.2-5.15q.15 0 .275-.05.125-.05.25-.175l2.35-2.35q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125l-2 1.95V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.45l-2.025-1.975q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l2.325 2.325q.125.125.25.175.125.05.275.05Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100Filled.displayName = 'AmauiIconMaterialSimCardDownloadW100Filled';

export default IconMaterialSimCardDownloadW100Filled;
