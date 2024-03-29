import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsCricketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsCricketFilled'

      short_name='SportsCricket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 14.2 12.2 17q-.3.3-.7.3-.4 0-.7-.3L2.3 8.5Q2 8.2 2 7.825q0-.375.3-.675l2.8-2.8q.3-.3.725-.3t.725.3L15 12.8q.3.3.3.7 0 .4-.3.7Zm2.9 7.1-3.55-3.55 1.4-1.4 3.575 3.575q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM18.5 9q-1.45 0-2.475-1.025Q15 6.95 15 5.5q0-1.45 1.025-2.475Q17.05 2 18.5 2q1.45 0 2.475 1.025Q22 4.05 22 5.5q0 1.45-1.025 2.475Q19.95 9 18.5 9Z"/>
    </Icon>
  );
});

IconMaterialSportsCricketFilled.displayName = 'AmauiIconMaterialSportsCricketFilled';

export default IconMaterialSportsCricketFilled;
