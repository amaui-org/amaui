import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShiftLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShiftLockW100'

      short_name='ShiftLock'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M372 714V604h-82.507Q271 604 262 587.5t2-31.5l192-264q9.36-13 24.18-13T504 292l192 264q11 15 2 31.5T670.507 604H588v110q0 12.75-8.625 21.375T558 744H402q-12.75 0-21.375-8.625T372 714Zm28 2h160V576h111L480 307 289 576h111v140Zm80-205ZM226 872q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h508q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975 868q-4.025 4-9.975 4H226Z"/>
    </Icon>
  );
});

IconMaterialShiftLockW100.displayName = 'AmauiIconMaterialShiftLockW100';

export default IconMaterialShiftLockW100;
