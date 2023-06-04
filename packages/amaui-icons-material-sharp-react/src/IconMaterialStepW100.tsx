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
      <path d="M744 691q-40 0-67.5-28T649 595q0-40 27.5-68t67.5-28q39 0 67 28t28 68q0 40-28 68t-67 28Zm-367 70-20-19 130-133H120v-28h368L357 449l20-21 165 167-165 166Z"/>
    </Icon>
  );
});

IconMaterialStepW100.displayName = 'AmauiIconMaterialStepW100';

export default IconMaterialStepW100;
