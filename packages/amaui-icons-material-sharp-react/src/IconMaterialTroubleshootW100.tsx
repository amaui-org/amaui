import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTroubleshootW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TroubleshootW100'

      short_name='Troubleshoot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M849-125 632-342q-45 37-91 56.5T435-266q-78 0-143-36.5T188-400h35q37 48 92 77t120 29q110 0 188-78t78-188q0-110-78-188t-188-78q-105 0-181 71.5T170-580h-28q8-116 91.5-195T435-854q123 0 208.5 85.5T729-560q0 60-19.5 106.5T653-362l216 216-20 21ZM403-416l-73-243-64 183H91v-28h155l66-190h37l72 242 57-172h37l60 120h34v28h-51l-60-120-59 180h-36Z"/>
    </Icon>
  );
});

IconMaterialTroubleshootW100.displayName = 'AmauiIconMaterialTroubleshootW100';

export default IconMaterialTroubleshootW100;
