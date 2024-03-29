import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTakeoutDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TakeoutDiningFilled'

      short_name='TakeoutDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 20q-.8 0-1.375-.525T5.8 18.15l-.5-6.6h13.4l-.5 6.6q-.05.8-.625 1.325Q17 20 16.2 20ZM4.625 10l-1.9-1.85q-.275-.275-.312-.687-.038-.413.287-.713.275-.275.7-.275.425 0 .7.275l.9.9-.05-.6 3.475-3.475q.275-.275.637-.425.363-.15.763-.15h4.35q.4 0 .763.15.362.15.637.425L19.05 7.05l-.05.6.9-.9q.275-.275.662-.35.388-.075.738.35.275.325.275.712 0 .388-.3.688l-1.9 1.85Z"/>
    </Icon>
  );
});

IconMaterialTakeoutDiningFilled.displayName = 'AmauiIconMaterialTakeoutDiningFilled';

export default IconMaterialTakeoutDiningFilled;
