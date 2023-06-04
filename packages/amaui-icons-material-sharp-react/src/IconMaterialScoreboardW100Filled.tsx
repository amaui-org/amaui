import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardW100Filled'

      short_name='Scoreboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 14.6h3.7V9.4h-3.7Zm.7-.7v-3.8h2.3v3.8Zm-9.1.7h3.7v-.7h-3v-1.55h3V9.4h-3.7v.7h3v1.55h-3Zm5.7-3.775h.7v-.7h-.7Zm0 3.2h.7v-.7h-.7Zm-8.4 4.4v-12.7h4.4v-2h.7v2h7.3v-2h.7v2h4.4v12.7Zm8.4-.7h.7v-1.2h-.7Zm0-10.1h.7v-1.2h-.7Z"/>
    </Icon>
  );
});

IconMaterialScoreboardW100Filled.displayName = 'AmauiIconMaterialScoreboardW100Filled';

export default IconMaterialScoreboardW100Filled;
