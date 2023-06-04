import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompressW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompressW100'

      short_name='Compress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-.15 0-.25-.1t-.1-.25V17.1l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.225-.225.525-.225.3 0 .525.225l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2v4.075q0 .125-.1.225t-.25.1Zm-7.025-8.3q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0-2.7q-.125 0-.225-.1t-.1-.25q0-.15.1-.25T5 9.8h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm6.5-3.775-2.35-2.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2 2V1.825q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V5.9l2.025-2.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325Q12.3 6.95 12 6.95q-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialCompressW100.displayName = 'AmauiIconMaterialCompressW100';

export default IconMaterialCompressW100;
