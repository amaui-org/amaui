import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftFilled'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 936V616H120l360-440 360 440H640v320H320Z"/>
    </Icon>
  );
});

IconMaterialShiftFilled.displayName = 'AmauiIconMaterialShiftFilled';

export default IconMaterialShiftFilled;
