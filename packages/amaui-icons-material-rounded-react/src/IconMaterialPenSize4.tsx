import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize4'

      short_name='PenSize4'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M229 827q-29-29-29-71t29-71l360-360q29-29 71-29t71 29q29 29 29 71t-29 71L371 827q-29 29-71 29t-71-29Z"/>
    </Icon>
  );
});

IconMaterialPenSize4.displayName = 'AmauiIconMaterialPenSize4';

export default IconMaterialPenSize4;
