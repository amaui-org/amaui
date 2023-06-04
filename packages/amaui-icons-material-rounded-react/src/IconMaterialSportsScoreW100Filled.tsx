import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsScoreW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsScoreW100Filled'

      short_name='SportsScore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 6.1h1.8V4.3h-1.8Zm3.6 0V4.3h1.8v1.8Zm-3.6 7.2v-1.8h1.8v1.8Zm7.2-3.6V7.9h1.8v1.8Zm0 3.6v-1.8h1.8v1.8Zm-3.6 0v-1.8h1.8v1.8Zm3.6-7.2V4.3h1.8v1.8Zm-5.4 1.8V6.1h1.8v1.8ZM6.6 19.3q-.15 0-.25-.1t-.1-.25V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.1h1.8v1.8h-1.8v1.8h1.8v1.8h-1.8v7.45q0 .15-.1.25t-.25.1Zm7.55-7.8V9.7h1.8v1.8Zm-3.6 0V9.7h1.8v1.8Zm-1.8-1.8V7.9h1.8v1.8Zm3.6 0V7.9h1.8v1.8Zm1.8-1.8V6.1h1.8v1.8Z"/>
    </Icon>
  );
});

IconMaterialSportsScoreW100Filled.displayName = 'AmauiIconMaterialSportsScoreW100Filled';

export default IconMaterialSportsScoreW100Filled;
