import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Scoreboard'

      short_name='Scoreboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 15V9H19v6Zm1.5-1.5h1.5v-3H16ZM5 15v-3.5h3v-1H5V9h4.5v3.5h-3v1h3V15Zm6.25-4V9.5h1.5V11Zm0 3.5V13h1.5v1.5ZM2 20V4h5V2h2v2h6V2h2v2h5v16Zm2-2h7.25v-1.5h1.5V18H20V6h-7.25v1.5h-1.5V6H4Zm0 0V6Z"/>
    </Icon>
  );
});

IconMaterialScoreboard.displayName = 'AmauiIconMaterialScoreboard';

export default IconMaterialScoreboard;
