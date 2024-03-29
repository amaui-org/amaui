import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedFilled'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.45 15.5q.625.625 1.575.587.95-.037 1.375-.687L19 7l-8.4 5.6q-.65.45-.712 1.362-.063.913.562 1.538ZM5.1 20q-.55 0-1.012-.238-.463-.237-.738-.712-.65-1.175-1-2.437Q2 15.35 2 14q0-2.075.788-3.9.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 4 12 4q2.05 0 3.85.775 1.8.775 3.15 2.113 1.35 1.337 2.15 3.124.8 1.788.825 3.838.025 1.375-.312 2.688-.338 1.312-1.038 2.512-.275.475-.737.712-.463.238-1.013.238Z"/>
    </Icon>
  );
});

IconMaterialSpeedFilled.displayName = 'AmauiIconMaterialSpeedFilled';

export default IconMaterialSpeedFilled;
