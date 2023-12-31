import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayShapesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayShapesW100Filled'

      short_name='PlayShapes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m120-550 162-279 162 279H120Zm163 405q-57 0-96-39t-39-96q0-57 39-96t96-39q57 0 96 39t39 96q0 57-39 96t-96 39Zm264 0v-270h270v270H547Zm19-409-19-19 116-116-116-116 19-20 116 116 116-116 19 20-116 116 116 116-19 19-116-116-116 116Z"/>
    </Icon>
  );
});

IconMaterialPlayShapesW100Filled.displayName = 'AmauiIconMaterialPlayShapesW100Filled';

export default IconMaterialPlayShapesW100Filled;
