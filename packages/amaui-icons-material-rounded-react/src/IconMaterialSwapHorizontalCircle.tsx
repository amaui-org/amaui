import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHorizontalCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizontalCircle'

      short_name='SwapHorizontalCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.7 13.3 2.6-2.6q.275-.275.275-.7 0-.425-.275-.7l-2.625-2.625q-.275-.275-.687-.263-.413.013-.688.288-.275.275-.275.687 0 .413.275.713l.85.9h-3.175q-.425 0-.7.287Q11 9.575 11 10t.288.712Q11.575 11 12 11h3.15l-.875.9q-.275.3-.263.712.013.413.288.688.275.275.7.275.425 0 .7-.275Zm-7.375 4.025Q8.6 17.6 9 17.6t.7-.3q.275-.275.275-.688 0-.412-.275-.712l-.85-.9h3.175q.425 0 .7-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13H8.85l.875-.9q.275-.3.275-.7 0-.4-.3-.7-.275-.275-.7-.275-.425 0-.7.275l-2.6 2.6q-.3.3-.3.7 0 .4.3.7ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizontalCircle.displayName = 'AmauiIconMaterialSwapHorizontalCircle';

export default IconMaterialSwapHorizontalCircle;
