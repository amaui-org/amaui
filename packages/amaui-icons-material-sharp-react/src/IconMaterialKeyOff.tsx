import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOff'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.75 22.575-7.55-7.55q-.8 1.35-2.175 2.163Q8.65 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.812-3.025Q2.625 7.6 3.975 6.8l-2.55-2.55 1.425-1.4 18.3 18.325ZM21 9l3 3-4.575 4.575-3.175-3.15 1.25-.925 1.8 1.35L21.175 12l-1-1h-6.35l-2-2ZM7 16q1.275 0 2.262-.688.988-.687 1.438-1.787l-1.4-1.4-1.212-1.213L6.875 9.7l-1.4-1.4q-1.1.45-1.787 1.438Q3 10.725 3 12q0 1.65 1.175 2.825Q5.35 16 7 16Zm0-2q-.825 0-1.412-.588Q5 12.825 5 12t.588-1.413Q6.175 10 7 10t1.412.587Q9 11.175 9 12q0 .825-.588 1.412Q7.825 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialKeyOff.displayName = 'AmauiIconMaterialKeyOff';

export default IconMaterialKeyOff;
