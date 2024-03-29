import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoundaboutRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoundaboutRight'

      short_name='RoundaboutRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.425 0-.713-.288Q7 20.425 7 20v-5.075q-2.15-.35-3.575-2.013Q2 11.25 2 9q0-2.5 1.75-4.25T8 3q2.25 0 3.913 1.425Q13.575 5.85 13.925 8H18.2l-.9-.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7l.9-.9h-4.3q-.725 0-1.275-.475-.55-.475-.675-1.2-.225-1.425-1.337-2.375Q9.5 5 8 5 6.35 5 5.175 6.175 4 7.35 4 9q0 1.5.95 2.613.95 1.112 2.375 1.337.725.125 1.2.675T9 14.9V20q0 .425-.287.712Q8.425 21 8 21Z"/>
    </Icon>
  );
});

IconMaterialRoundaboutRight.displayName = 'AmauiIconMaterialRoundaboutRight';

export default IconMaterialRoundaboutRight;
