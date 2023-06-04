import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlarmOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOnW100Filled'

      short_name='AlarmOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.975 14.65-1.9-1.9q-.125-.125-.25-.125t-.25.125q-.1.1-.112.238-.013.137.087.237l1.9 1.9q.225.225.525.225.3 0 .525-.225l3.975-3.975q.125-.125.125-.25t-.125-.25q-.1-.1-.237-.113-.138-.012-.238.088Zm1.05 6.05q-1.6 0-3-.6t-2.45-1.65Q5.525 17.4 4.925 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45 1.05-1.05 2.45-1.65 1.4-.6 3-.6t3 .6q1.4.6 2.45 1.65 1.05 1.05 1.65 2.45.6 1.4.6 3t-.6 3q-.6 1.4-1.65 2.45-1.05 1.05-2.45 1.65-1.4.6-3 .6ZM3.5 7.275q-.1.1-.237.087-.138-.012-.238-.112Q2.9 7.125 2.9 7t.125-.25L5.8 3.975q.1-.1.238-.088.137.013.237.113.125.125.125.25t-.125.25Zm17.025-.025L17.75 4.475q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l2.775 2.775q.1.1.088.237-.013.138-.113.238-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialAlarmOnW100Filled.displayName = 'AmauiIconMaterialAlarmOnW100Filled';

export default IconMaterialAlarmOnW100Filled;
