import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYoutubeSearchedForFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForFilled'

      short_name='YoutubeSearchedFor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.55 20.45 14.8 14.7q-.8.65-1.775.975Q12.05 16 11 16q-1.05 0-2-.312-.95-.313-1.75-.888l1.45-1.45q.5.3 1.075.475T11 14q1.875 0 3.188-1.312Q15.5 11.375 15.5 9.5q0-1.875-1.312-3.188Q12.875 5 11 5 9.275 5 8.012 6.162 6.75 7.325 6.55 9.05L7.8 7.8l1.4 1.4-3.7 3.7-3.7-3.7 1.4-1.4 1.35 1.3q.15-2.575 2-4.338Q8.4 3 11 3q2.725 0 4.613 1.887Q17.5 6.775 17.5 9.5q0 1.05-.325 2.05-.325 1-.975 1.75l5.75 5.75Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForFilled.displayName = 'AmauiIconMaterialYoutubeSearchedForFilled';

export default IconMaterialYoutubeSearchedForFilled;
