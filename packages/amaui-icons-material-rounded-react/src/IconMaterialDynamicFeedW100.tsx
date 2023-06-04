import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedW100'

      short_name='DynamicFeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.8 15.7q-.65 0-1.075-.425Q7.3 14.85 7.3 14.2V9.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.85q0 .3.25.55.25.25.55.25h6.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.7-3.7q-.65 0-1.075-.425Q11 11.15 11 10.5V6.1q0-.65.425-1.075Q11.85 4.6 12.5 4.6h6.4q.65 0 1.075.425.425.425.425 1.075v4.4q0 .65-.425 1.075Q19.55 12 18.9 12Zm0-.7h6.4q.3 0 .55-.25.25-.25.25-.55V7.3h-8v3.2q0 .3.25.55.25.25.55.25Zm-7.4 8.1q-.65 0-1.075-.425Q3.6 18.55 3.6 17.9v-4.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.85q0 .3.25.55.25.25.55.25h6.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedW100.displayName = 'AmauiIconMaterialDynamicFeedW100';

export default IconMaterialDynamicFeedW100;
