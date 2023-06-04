import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardW100'

      short_name='SdCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.1 10.7q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm2.75 0q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm2.75 0q.15 0 .25-.1t.1-.25V7.8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.55q0 .15.1.25t.25.1Zm-8.8 10q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.125-.588.125-.287.325-.487l4.35-4.35q.2-.2.488-.325.287-.125.587-.125H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.3 0 .55-.25.25-.25.25-.55V4.8q0-.3-.25-.55Q17.5 4 17.2 4h-6.35L6 8.85V19.2q0 .3.25.55.25.25.55.25Zm0 0H6h12-.8Z"/>
    </Icon>
  );
});

IconMaterialSdCardW100.displayName = 'AmauiIconMaterialSdCardW100';

export default IconMaterialSdCardW100;
