import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitW100Filled'

      short_name='HorizontalSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.625 7Q4.5 7 4.4 6.9t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0 2.7q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.725q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm.425 8q-.325 0-.537-.213-.213-.212-.213-.537v-4.5q0-.325.213-.538.212-.212.537-.212h13.9q.325 0 .538.212.212.213.212.538v4.5q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitW100Filled.displayName = 'AmauiIconMaterialHorizontalSplitW100Filled';

export default IconMaterialHorizontalSplitW100Filled;
