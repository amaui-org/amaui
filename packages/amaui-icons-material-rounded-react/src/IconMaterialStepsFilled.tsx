import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsFilled'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 476H88q4-14 10.5-26.5T114 425l154-206q17-23 45.5-30.5T368 195l28 14q21 11 32.5 30t11.5 42v84l74-19q30-8 58 7.5t38 44.5l65 196 170 170q20 20 27.5 43t7.5 49q0 37-20 66t-52 43L354 531q-29-27-64-41t-74-14Zm350 500q-30 0-57-11t-50-31L134 639q-19-17-31-38.5T86 556h130q23 0 44.5 8t38.5 25l404 387H566Z"/>
    </Icon>
  );
});

IconMaterialStepsFilled.displayName = 'AmauiIconMaterialStepsFilled';

export default IconMaterialStepsFilled;
