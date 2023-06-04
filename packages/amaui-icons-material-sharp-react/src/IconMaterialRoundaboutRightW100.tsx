import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRightW100'

      short_name='RoundaboutRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 20.35v-6q-2.075-.125-3.537-1.638Q2.65 11.2 2.65 9q0-2.225 1.563-3.788Q5.775 3.65 8 3.65q2.05 0 3.6 1.375Q13.15 6.4 13.325 8.65h6.4l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25H12.65V9q0-1.925-1.362-3.288Q9.925 4.35 8 4.35q-1.925 0-3.287 1.362Q3.35 7.075 3.35 9q0 1.925 1.363 3.287Q6.075 13.65 8 13.65h.35v6.7Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRightW100.displayName = 'AmauiIconMaterialRoundaboutRightW100';

export default IconMaterialRoundaboutRightW100;
