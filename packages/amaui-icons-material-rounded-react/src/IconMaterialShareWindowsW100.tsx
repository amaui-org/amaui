import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareWindowsW100'

      short_name='ShareWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-386q-6 0-10-4t-4-10v-194q0-25 17.5-42.5T366-654h368L615-773q-4-4-4.5-9.5T615-793q5-5 10-5t10 5l132 132q9 9 9 21t-9 21L635-486q-4 5-9.5 5t-10.5-5q-5-5-4.5-10t4.5-10l119-120H366q-14 0-23 9t-9 23v194q0 6-4 10t-10 4Zm-88 214q-25 0-42.5-17.5T172-232v-522q0-6 4-10t10-4q6 0 10 4t4 10v522q0 14 9 23t23 9h416q14 0 23-9t9-23v-140q0-6 4-10t10-4q6 0 10 4t4 10v140q0 25-17.5 42.5T648-172H232Z"/>
    </Icon>
  );
});

IconMaterialShareWindowsW100.displayName = 'AmauiIconMaterialShareWindowsW100';

export default IconMaterialShareWindowsW100;
