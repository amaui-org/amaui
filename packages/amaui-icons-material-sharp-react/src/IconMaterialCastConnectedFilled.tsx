import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedFilled'

      short_name='CastConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 16H18V8H7q2.65 1.1 4.588 3.188Q13.525 13.275 14.35 16ZM13 20q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9V4h20v16Zm-4 0q0-2.925-2.037-4.963Q4.925 13 2 13v-2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20Zm-4 0q0-1.25-.875-2.125T2 17v-2q2.075 0 3.537 1.462Q7 17.925 7 20Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedFilled.displayName = 'AmauiIconMaterialCastConnectedFilled';

export default IconMaterialCastConnectedFilled;
