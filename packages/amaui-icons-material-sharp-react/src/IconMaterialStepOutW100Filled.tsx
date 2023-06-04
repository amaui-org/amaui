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
      <path d="M480.118 950Q441 950 413.5 922.618q-27.5-27.383-27.5-66.5Q386 817 413.382 789.5q27.383-27.5 66.5-27.5Q519 762 546.5 789.382q27.5 27.383 27.5 66.5Q574 895 546.618 922.5q-27.383 27.5-66.5 27.5ZM466 656V293L336 421l-19-19 163-163 163 163-20 19-129-129v364h-28Z"/>
    </Icon>
  );
});

IconMaterialStepOutW100Filled.displayName = 'AmauiIconMaterialStepOutW100Filled';

export default IconMaterialStepOutW100Filled;
