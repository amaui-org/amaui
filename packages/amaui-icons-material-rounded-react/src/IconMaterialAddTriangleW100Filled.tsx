import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddTriangleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTriangleW100Filled'

      short_name='AddTriangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172q-26 0-39.5-22.5t.5-45.5l308-522q7-11 17.38-17 10.38-6 21.5-6t21.62 6q10.5 6 17.5 17l309 522q14 23 .5 45.5T789-172H172Zm294-192v63q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-63h65q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4h-65v-62q0-5.95-4.04-9.98-4.03-4.02-10-4.02-5.96 0-9.96 4.02-4 4.03-4 9.98v62h-64q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h64Z"/>
    </Icon>
  );
});

IconMaterialAddTriangleW100Filled.displayName = 'AmauiIconMaterialAddTriangleW100Filled';

export default IconMaterialAddTriangleW100Filled;
