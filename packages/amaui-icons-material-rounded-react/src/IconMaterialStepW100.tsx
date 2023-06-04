import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepW100'

      short_name='Step'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M744 691q-40 0-67.5-28T649 595q0-40 27.5-68t67.5-28q39 0 67 28t28 68q0 40-28 68t-67 28Zm-257-82H134q-6 0-10-4t-4-10q0-6 4-10t10-4h354L367 459q-4-5-4-10t4-10q5-5 10.5-5t10.5 5l133 135q9 9 9 21t-9 21L386 752q-4 4-9 4t-10-4q-5-4-4.5-9.5T367 732l120-123Z"/>
    </Icon>
  );
});

IconMaterialStepW100.displayName = 'AmauiIconMaterialStepW100';

export default IconMaterialStepW100;
