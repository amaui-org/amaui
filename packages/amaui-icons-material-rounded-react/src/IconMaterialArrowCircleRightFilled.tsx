import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowCircleRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleRightFilled'

      short_name='ArrowCircleRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.7 15.3 2.6-2.6q.275-.275.275-.7 0-.425-.275-.7l-2.625-2.625q-.275-.275-.687-.263-.413.013-.688.288-.275.275-.275.7 0 .425.275.7l.9.9H8.975q-.425 0-.7.287Q8 11.575 8 12t.288.712Q8.575 13 9 13h3.2l-.925.925q-.275.275-.263.688.013.412.288.687.275.275.7.275.425 0 .7-.275ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialArrowCircleRightFilled.displayName = 'AmauiIconMaterialArrowCircleRightFilled';

export default IconMaterialArrowCircleRightFilled;
