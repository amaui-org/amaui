import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastFilled'

      short_name='Cast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 20q0-2.275-.863-4.275-.862-2-2.362-3.5t-3.5-2.362Q4.275 9 2 9V4h20v16Zm-4 0q0-2.925-2.037-4.963Q4.925 13 2 13v-2q1.875 0 3.513.712 1.637.713 2.85 1.925 1.212 1.213 1.925 2.851Q11 18.125 11 20Zm-4 0q0-1.25-.875-2.125T2 17v-2q2.075 0 3.537 1.462Q7 17.925 7 20Z"/>
    </Icon>
  );
});

IconMaterialCastFilled.displayName = 'AmauiIconMaterialCastFilled';

export default IconMaterialCastFilled;
