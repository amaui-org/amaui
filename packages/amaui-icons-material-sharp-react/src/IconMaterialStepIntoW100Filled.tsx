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
      <path d="M480.118 950Q441 950 413.5 922.618q-27.5-27.383-27.5-66.5Q386 817 413.382 789.5q27.383-27.5 66.5-27.5Q519 762 546.5 789.382q27.5 27.383 27.5 66.5Q574 895 546.618 922.5q-27.383 27.5-66.5 27.5ZM480 656 317 493l19-20 130 129V239h28v364l129-130 20 20-163 163Z"/>
    </Icon>
  );
});

IconMaterialStepIntoW100Filled.displayName = 'AmauiIconMaterialStepIntoW100Filled';

export default IconMaterialStepIntoW100Filled;
