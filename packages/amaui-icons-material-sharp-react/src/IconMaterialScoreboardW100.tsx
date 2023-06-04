import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScoreboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardW100'

      short_name='Scoreboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 14.6V9.4h3.7v5.2Zm.7-.7h2.3v-3.8h-2.3Zm-9.1.7v-2.95h3V10.1h-3v-.7h3.7v2.95h-3v1.55h3v.7Zm5.7-3.775v-.7h.7v.7Zm0 3.2v-.7h.7v.7Zm-8.4 4.4v-12.7h4.4v-2h.7v2h7.3v-2h.7v2h4.4v12.7Zm.7-.7h7.7v-1.2h.7v1.2h7.7v-11.3h-7.7v1.2h-.7v-1.2h-7.7Zm0 0v-11.3Z"/>
    </Icon>
  );
});

IconMaterialScoreboardW100.displayName = 'AmauiIconMaterialScoreboardW100';

export default IconMaterialScoreboardW100;
