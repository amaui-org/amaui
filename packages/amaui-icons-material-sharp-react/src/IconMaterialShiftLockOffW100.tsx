import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockOffW100'

      short_name='ShiftLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-184v-28h536v28H212Zm160-128v-140H230l117-161 21 21-79 112h111v140h160v-60l28 28v60H372Zm247-140-28-28h80L480-749l-66 92-21-21 87-120 250 346H619ZM852-68 90-830l20-20L872-88l-20 20ZM503-568Zm-49 102Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffW100.displayName = 'AmauiIconMaterialShiftLockOffW100';

export default IconMaterialShiftLockOffW100;
