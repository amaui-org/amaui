import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeScooter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooter'

      short_name='BikeScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 19v-2h4.1q.275-1.7 1.413-2.975Q6.65 12.75 8.3 12.25L6.85 6H3V4h5.45l2.3 10H10q-1.65 0-2.825 1.175Q6 16.35 6 18v1Zm10 2q-1.25 0-2.125-.875T7 18q0-1.25.875-2.125T10 15q1.25 0 2.125.875T13 18q0 1.25-.875 2.125T10 21Zm0-2q.425 0 .713-.288Q11 18.425 11 18t-.287-.712Q10.425 17 10 17t-.712.288Q9 17.575 9 18t.288.712Q9.575 19 10 19Zm9-1q-1.8 0-3.162-1.113Q14.475 15.775 14.1 14h-2.35l-.45-2h2.8q.125-.575.338-1.075.212-.5.562-.925h-4.15l-.45-2h5.65l-1.1-3h-2.6V3h4.025L18.2 7.95h.8q2.075 0 3.538 1.462Q24 10.875 24 12.95q0 2.125-1.462 3.588Q21.075 18 19 18Zm0-2q1.275 0 2.138-.875Q22 14.25 22 13q0-1.275-.862-2.137Q20.275 10 19 10h-.1l1 2.65-1.9.7-.95-2.65q-.5.425-.775 1T16 13q0 1.25.863 2.125Q17.725 16 19 16Zm-9 2Zm9-5Z"/>
    </Icon>
  );
});

IconMaterialBikeScooter.displayName = 'AmauiIconMaterialBikeScooter';

export default IconMaterialBikeScooter;
