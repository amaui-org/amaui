import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLock'

      short_name='ShiftLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816V616H120l360-440 360 440H640v200H320Zm80-80h160V536h111L480 302 289 536h111v200Zm80-217ZM160 976v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialShiftLock.displayName = 'AmauiIconMaterialShiftLock';

export default IconMaterialShiftLock;
