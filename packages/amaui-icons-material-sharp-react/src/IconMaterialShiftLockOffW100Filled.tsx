import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockOffW100Filled'

      short_name='ShiftLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-184v-28h536v28H212Zm160-128v-140H230l117-161 241 241v60H372Zm247-140L393-678l87-120 250 346H619ZM852-68 90-830l20-20L872-88l-20 20Z"/>
    </Icon>
  );
});

IconMaterialShiftLockOffW100Filled.displayName = 'AmauiIconMaterialShiftLockOffW100Filled';

export default IconMaterialShiftLockOffW100Filled;
