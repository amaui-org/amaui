import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOutW100Filled'

      short_name='StepOut'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.118 950Q441 950 413.5 922.618q-27.5-27.383-27.5-66.5Q386 817 413.382 789.5q27.383-27.5 66.5-27.5Q519 762 546.5 789.382q27.5 27.383 27.5 66.5Q574 895 546.618 922.5q-27.383 27.5-66.5 27.5ZM466 293 345 412q-4 4-9 3.5t-9.174-4.5Q323 407.333 323 401.667q0-5.667 4-9.667l132-132q9-9 21-9t21 9l132 132q4 4 4.5 10t-4.5 10q-4 4-10 3.5t-10-4.5L494 292v350q0 5.95-4.035 9.975-4.035 4.025-10 4.025T470 651.975q-4-4.025-4-9.975V293Z"/>
    </Icon>
  );
});

IconMaterialStepOutW100Filled.displayName = 'AmauiIconMaterialStepOutW100Filled';

export default IconMaterialStepOutW100Filled;
