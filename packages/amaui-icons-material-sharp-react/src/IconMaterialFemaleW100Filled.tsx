import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFemaleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleW100Filled'

      short_name='Female'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.35v-2h-2v-.7h2v-3.3q-1.9-.175-3.2-1.563Q7.15 11.4 7.15 9.5q0-2.025 1.412-3.438Q9.975 4.65 12 4.65q2.025 0 3.438 1.412Q16.85 7.475 16.85 9.5q0 1.9-1.3 3.287-1.3 1.388-3.2 1.563v3.3h2v.7h-2v2Zm.35-6.7q1.725 0 2.938-1.212Q16.15 11.225 16.15 9.5t-1.212-2.938Q13.725 5.35 12 5.35T9.062 6.562Q7.85 7.775 7.85 9.5t1.212 2.938Q10.275 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialFemaleW100Filled.displayName = 'AmauiIconMaterialFemaleW100Filled';

export default IconMaterialFemaleW100Filled;
