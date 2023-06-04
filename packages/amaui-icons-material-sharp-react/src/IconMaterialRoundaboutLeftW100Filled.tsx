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
      <path d="M15.65 20.35v-6.7H16q1.925 0 3.288-1.363Q20.65 10.925 20.65 9q0-1.925-1.362-3.288Q17.925 4.35 16 4.35q-1.925 0-3.287 1.362Q11.35 7.075 11.35 9v.35H4.275l2.25 2.25-.5.5-3.1-3.1 3.1-3.1.5.5-2.25 2.25h6.375q.175-2.25 1.738-3.625Q13.95 3.65 16 3.65q2.225 0 3.788 1.562Q21.35 6.775 21.35 9q0 2.2-1.462 3.712-1.463 1.513-3.538 1.638v6Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutLeftW100Filled.displayName = 'AmauiIconMaterialRoundaboutLeftW100Filled';

export default IconMaterialRoundaboutLeftW100Filled;
