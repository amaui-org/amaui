import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShift = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shift'

      short_name='Shift'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 936V616H120l360-440 360 440H640v320H320Zm80-80h160V536h111L480 302 289 536h111v320Zm80-320Z"/>
    </Icon>
  );
});

IconMaterialShift.displayName = 'AmauiIconMaterialShift';

export default IconMaterialShift;
