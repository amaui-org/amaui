import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHdrPlusOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusOffFilled'

      short_name='HdrPlusOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-540h60v-120h-60v120ZM340-340h80v-40h-80v40Zm-60 140h60v-80h44l34 80h62l-36-84h6l30-30v-96l-30-30H280v240Zm0-280h60v-84l-60-60v144ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31-156.5T199-761l562 562q-51 57-123.5 88T480-80Zm340 52L28-820l56-56L876-84l-56 56Zm-6-232L594-480h76l30-30v-180l-30-30H520v166l-40-40v-126h-60v66L259-815q47-32 103-48.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 62-17 117.5T814-260Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusOffFilled.displayName = 'AmauiIconMaterialHdrPlusOffFilled';

export default IconMaterialHdrPlusOffFilled;
