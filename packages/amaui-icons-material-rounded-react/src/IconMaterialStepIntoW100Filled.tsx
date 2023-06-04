import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepIntoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepIntoW100Filled'

      short_name='StepInto'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.118 950Q441 950 413.5 922.618q-27.5-27.383-27.5-66.5Q386 817 413.382 789.5q27.383-27.5 66.5-27.5Q519 762 546.5 789.382q27.5 27.383 27.5 66.5Q574 895 546.618 922.5q-27.383 27.5-66.5 27.5ZM466 602V253q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v350l119-120q3.75-5 9.375-5T633 482.783Q638 488 638 493q0 5-5 10L501 635q-9 9-21 9t-21-9L326 502q-3.667-3.75-3.833-9.375Q322 487 326 483q4-5 10-4.5t10 4.5l120 119Z"/>
    </Icon>
  );
});

IconMaterialStepIntoW100Filled.displayName = 'AmauiIconMaterialStepIntoW100Filled';

export default IconMaterialStepIntoW100Filled;
