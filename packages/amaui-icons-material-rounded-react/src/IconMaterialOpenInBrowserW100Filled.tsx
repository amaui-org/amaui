import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserW100Filled'

      short_name='OpenInBrowser'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.7q-.15 0-.25-.1t-.1-.25v-6l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2v6q0 .15-.1.25t-.25.1Zm-6.2 0q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425h-2.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.5q.3 0 .55-.25.25-.25.25-.55V7H5v11.2q0 .3.25.55.25.25.55.25h2.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserW100Filled.displayName = 'AmauiIconMaterialOpenInBrowserW100Filled';

export default IconMaterialOpenInBrowserW100Filled;
