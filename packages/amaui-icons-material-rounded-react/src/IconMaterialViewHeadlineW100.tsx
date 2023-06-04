import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewHeadlineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineW100'

      short_name='ViewHeadline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.975 14.2q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.7q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0-7.4q-.125 0-.225-.1t-.1-.25q0-.15.1-.25T5 9.8h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm0-3.7q-.125 0-.225-.1t-.1-.25q0-.15.1-.25T5 6.1h14.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineW100.displayName = 'AmauiIconMaterialViewHeadlineW100';

export default IconMaterialViewHeadlineW100;
