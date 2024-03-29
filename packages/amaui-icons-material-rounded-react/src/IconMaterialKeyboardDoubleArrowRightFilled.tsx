import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowRightFilled'

      short_name='KeyboardDoubleArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.7 17.3q-.275-.275-.275-.7 0-.425.275-.7L9.575 12 5.7 8.1q-.275-.275-.287-.688Q5.4 7 5.7 6.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.688.287Q6 17.6 5.7 17.3Zm6.6 0q-.275-.275-.275-.7 0-.425.275-.7l3.875-3.9L12.3 8.1q-.275-.275-.288-.688Q12 7 12.3 6.7q.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.212.325.063.175.063.375t-.063.375q-.062.175-.212.325l-4.6 4.6q-.275.275-.687.287-.413.013-.713-.287Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowRightFilled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowRightFilled';

export default IconMaterialKeyboardDoubleArrowRightFilled;
