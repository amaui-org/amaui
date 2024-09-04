import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveW100'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-429v237q0 14 9 23t23 9h496q14 0 23-9t9-23v-237H200Zm32 297q-24.75 0-42.37-17.63Q172-167.25 172-192v-496q0-24.75 17.63-42.38Q207.25-748 232-748h40q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-40q-14 0-23 9t-9 23v231h560v-231q0-14-9-23t-23-9h-40q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h40q24.75 0 42.38 17.62Q788-712.75 788-688v496q0 24.75-17.62 42.37Q752.75-132 728-132H232Zm234-588h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-66Zm14 263Zm0 28v-28 28Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveW100.displayName = 'AmauiIconMaterialAddRowAboveW100';

export default IconMaterialAddRowAboveW100;
