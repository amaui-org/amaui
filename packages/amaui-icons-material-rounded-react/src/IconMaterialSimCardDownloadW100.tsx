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
      <path d="M6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.125-.588.125-.287.325-.487l4.35-4.35q.2-.2.488-.325.287-.125.587-.125H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q17.5 4 17.2 4h-6.35L6 8.85V19.2q0 .3.25.55.25.25.55.25Zm5.2-4.45q.15 0 .275-.05.125-.05.25-.175l2.35-2.35q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.113-.125.013-.25.113l-2 1.95V10q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v4.45l-2.025-1.975q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l2.325 2.325q.125.125.25.175.125.05.275.05ZM6.8 20H6h12-.8Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadW100.displayName = 'AmauiIconMaterialSimCardDownloadW100';

export default IconMaterialSimCardDownloadW100;
