import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartToy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartToy'

      short_name='SmartToy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-6H1V9h3V5h5V2h6v3h5v4h3v6h-3v6Zm5-8q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q9.625 10 9 10t-1.062.438Q7.5 10.875 7.5 11.5t.438 1.062Q8.375 13 9 13Zm6 0q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q15.625 10 15 10t-1.062.438q-.438.437-.438 1.062t.438 1.062Q14.375 13 15 13Zm-7 4h8v-2H8Zm-2 2h12V7H6Zm0 0V7v12Z"/>
    </Icon>
  );
});

IconMaterialSmartToy.displayName = 'AmauiIconMaterialSmartToy';

export default IconMaterialSmartToy;
