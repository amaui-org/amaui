import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardFilled'

      short_name='Scoreboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.5 15H19V9h-4.5Zm1.5-1.5v-3h1.5v3ZM5 15h4.5v-1.5h-3v-1h3V9H5v1.5h3v1H5Zm6.25-4h1.5V9.5h-1.5Zm0 3.5h1.5V13h-1.5ZM2 20V4h5V2h2v2h6V2h2v2h5v16Zm9.25-2h1.5v-1.5h-1.5Zm0-10.5h1.5V6h-1.5Z"/>
    </Icon>
  );
});

IconMaterialScoreboardFilled.displayName = 'AmauiIconMaterialScoreboardFilled';

export default IconMaterialScoreboardFilled;
