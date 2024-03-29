import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsRugbyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsRugbyFilled'

      short_name='SportsRugby'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 21.5q-1.425 0-2.575-.225-1.15-.225-1.625-.725-.45-.475-.7-1.65-.25-1.175-.25-2.65 0-2.875 1.013-5.512Q4.525 8.1 6.3 6.3q1.775-1.775 4.438-2.788Q13.4 2.5 16.35 2.5q1.425 0 2.575.225 1.15.225 1.625.725.45.475.7 1.65.25 1.175.25 2.65 0 2.875-1.012 5.512Q19.475 15.9 17.7 17.7q-1.775 1.775-4.437 2.788Q10.6 21.5 7.65 21.5Zm-3.1-5.65q.825-1.8 2-3.513 1.175-1.712 2.6-3.187 1.425-1.425 3.138-2.6Q14 5.375 15.8 4.55q-2.275.075-4.462.937Q9.15 6.35 7.75 7.75q-1.475 1.425-2.312 3.575-.838 2.15-.888 4.525Zm3.65 3.6q2.275-.075 4.463-.938 2.187-.862 3.587-2.262 1.475-1.425 2.312-3.575.838-2.15.888-4.525-.825 1.8-2 3.512-1.175 1.713-2.6 3.188-1.425 1.425-3.137 2.6-1.713 1.175-3.513 2Z"/>
    </Icon>
  );
});

IconMaterialSportsRugbyFilled.displayName = 'AmauiIconMaterialSportsRugbyFilled';

export default IconMaterialSportsRugbyFilled;
