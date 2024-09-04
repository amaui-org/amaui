import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowAboveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowAboveW100Filled'

      short_name='AddRowAbove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-297h616v297H172Zm0-325v-291h114v14q0 80.51 56.26 137.26Q398.52-540 480-540q81.48 0 137.74-56.74Q674-653.49 674-734v-14h114v291H172Zm294-183v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialAddRowAboveW100Filled.displayName = 'AmauiIconMaterialAddRowAboveW100Filled';

export default IconMaterialAddRowAboveW100Filled;
