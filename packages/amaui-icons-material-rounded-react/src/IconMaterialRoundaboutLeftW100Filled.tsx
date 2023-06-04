import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutLeftW100Filled'

      short_name='RoundaboutLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 20.35q-.15 0-.25-.1t-.1-.25v-5.1q0-.5.325-.863.325-.362.825-.462 1.675-.275 2.762-1.563Q20.65 10.725 20.65 9q0-1.925-1.362-3.288Q17.925 4.35 16 4.35q-1.725 0-3.012 1.1-1.288 1.1-1.563 2.75-.1.5-.462.825-.363.325-.863.325H4.275l2 2q.1.1.1.237 0 .138-.1.263-.125.125-.25.125t-.25-.125L3.45 9.525q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L5.775 6.15q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-2 2h5.875q.2 0 .35-.15.15-.15.2-.35.325-1.9 1.788-3.2Q13.95 3.65 16 3.65q2.225 0 3.788 1.562Q21.35 6.775 21.35 9q0 2.05-1.312 3.5-1.313 1.45-3.188 1.775-.2.05-.35.213-.15.162-.15.362V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftW100Filled.displayName = 'AmauiIconMaterialRoundaboutLeftW100Filled';

export default IconMaterialRoundaboutLeftW100Filled;
