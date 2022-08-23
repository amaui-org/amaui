import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipNextRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextRoundedW100Filled'
      short_name='SkipNext'

      {...props}
    >
      <path d="M16.55 16.2Q16.4 16.2 16.3 16.1Q16.2 16 16.2 15.85V8.15Q16.2 8 16.3 7.9Q16.4 7.8 16.55 7.8Q16.7 7.8 16.8 7.9Q16.9 8 16.9 8.15V15.85Q16.9 16 16.8 16.1Q16.7 16.2 16.55 16.2ZM8.275 15.425Q7.9 15.7 7.5 15.475Q7.1 15.25 7.1 14.8V9.2Q7.1 8.75 7.5 8.525Q7.9 8.3 8.275 8.575L12.475 11.375Q12.8 11.6 12.8 12Q12.8 12.4 12.475 12.625Z"/>
    </Icon>
  );
});

IconMaterialSkipNextRoundedW100Filled.displayName = 'AmauiIconMaterialSkipNextRoundedW100Filled';

export default IconMaterialSkipNextRoundedW100Filled;
