import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitW100Filled'

      short_name='VerticalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 14.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.225-.1h6.025q.15 0 .25.1t.1.25q0 .15-.1.25t-.225.1Zm0 3.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.225-.1h6.025q.15 0 .25.1t.1.25q0 .15-.1.25t-.225.1Zm0-7.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.225-.1h6.025q.15 0 .25.1t.1.25q0 .15-.1.25t-.225.1Zm0-3.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.225-.1h6.025q.15 0 .25.1t.1.25q0 .15-.1.25t-.225.1Zm10.4 10.7q-.325 0-.537-.213-.213-.212-.213-.537v-9.9q0-.325.213-.538.212-.212.537-.212h3.9q.325 0 .538.212.212.213.212.538v9.9q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitW100Filled.displayName = 'AmauiIconMaterialVerticalSplitW100Filled';

export default IconMaterialVerticalSplitW100Filled;
