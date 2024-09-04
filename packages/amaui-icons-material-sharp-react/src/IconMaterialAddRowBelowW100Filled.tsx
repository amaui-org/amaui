import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowBelowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelowW100Filled'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-531v-297h616v297H172Zm0 319v-291h616v291H674v-14q0-80.51-56.26-137.26Q561.48-420 480-420q-81.48 0-137.74 56.74Q286-306.51 286-226q0 3.67.5 6.83.5 3.17.5 7.17H172Zm294 80v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelowW100Filled.displayName = 'AmauiIconMaterialAddRowBelowW100Filled';

export default IconMaterialAddRowBelowW100Filled;
