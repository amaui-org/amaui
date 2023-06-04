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
      <path d="M14.95 14.6h2.5q.25 0 .425-.175T18.05 14v-4q0-.25-.175-.425T17.45 9.4h-2.5q-.25 0-.425.175T14.35 10v4q0 .25.175.425t.425.175Zm.1-.7v-3.8h2.3v3.8Zm-8.35.7h2.6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H6.65v-1.55h2.3q.25 0 .475-.225.225-.225.225-.475V10q0-.25-.175-.425T9.05 9.4H6.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h2.65v1.55h-2.3q-.25 0-.475.225-.225.225-.225.475v1.5q0 .325.212.537.213.213.538.213Zm5.3-3.775q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 3.2q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-7.25 4.4q-.625 0-1.062-.437-.438-.438-.438-1.063v-9.7q0-.625.438-1.063.437-.437 1.062-.437h2.9v-1.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h7.3v-1.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.9q.625 0 1.062.437.438.438.438 1.063v9.7q0 .625-.438 1.063-.437.437-1.062.437ZM12 6.925q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1Zm0 10.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialScoreboardW100Filled.displayName = 'AmauiIconMaterialScoreboardW100Filled';

export default IconMaterialScoreboardW100Filled;
