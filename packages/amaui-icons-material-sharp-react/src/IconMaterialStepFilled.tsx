import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepFilled'

      short_name='Step'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 696q-51 0-85.5-34.5T640 576q0-51 34.5-85.5T760 456q51 0 85.5 34.5T880 576q0 51-34.5 85.5T760 696Zm-400 80-56-57 103-103H80v-80h327L304 432l56-56 200 200-200 200Z"/>
    </Icon>
  );
});

IconMaterialStepFilled.displayName = 'AmauiIconMaterialStepFilled';

export default IconMaterialStepFilled;
