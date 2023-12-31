import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPackage2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Package2Filled'

      short_name='Package2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-91v-366L120-642v321q0 22 10.5 40t29.5 29L440-91Zm80 0 280-161q19-11 29.5-29t10.5-40v-321L520-457v366Zm159-550 118-69-277-159q-19-11-40-11t-40 11l-79 45 318 183ZM480-526l119-68-317-184-120 69 318 183Z"/>
    </Icon>
  );
});

IconMaterialPackage2Filled.displayName = 'AmauiIconMaterialPackage2Filled';

export default IconMaterialPackage2Filled;
