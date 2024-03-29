import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleDown'

      short_name='ArrowCircleDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.575q.2 0 .375-.063.175-.062.325-.212l2.6-2.6q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275l-.9.9V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3.2l-.9-.9q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l2.6 2.6q.15.15.325.212.175.063.375.063ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleDown.displayName = 'AmauiIconMaterialArrowCircleDown';

export default IconMaterialArrowCircleDown;
