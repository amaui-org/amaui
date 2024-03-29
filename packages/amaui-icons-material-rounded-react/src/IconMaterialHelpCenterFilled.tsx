import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHelpCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpCenterFilled'

      short_name='HelpCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-3q.525 0 .887-.363.363-.362.363-.887t-.363-.887Q12.525 15.5 12 15.5t-.887.363q-.363.362-.363.887t.363.887Q11.475 18 12 18Zm1-4.7q.075-.4.263-.7.187-.3.737-.85.925-.925 1.25-1.5.325-.575.325-1.3 0-1.275-.937-2.112Q13.7 6 12.275 6q-1.075 0-1.912.438-.838.437-1.288 1.162-.225.35-.125.737.1.388.45.538.35.15.688.012.337-.137.537-.462.25-.35.675-.538.425-.187.875-.187.7 0 1.125.375.425.375.425.95 0 .475-.287.95-.288.475-.888 1-.65.575-1 1.175-.35.6-.35 1.125 0 .35.263.6.262.25.637.25.35 0 .588-.238.237-.237.312-.587Z"/>
    </Icon>
  );
});

IconMaterialHelpCenterFilled.displayName = 'AmauiIconMaterialHelpCenterFilled';

export default IconMaterialHelpCenterFilled;
