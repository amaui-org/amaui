import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalSeeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalSeeFilled'

      short_name='LocalSee'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 15q3.025-2.575 4.513-4.775Q24 8.025 24 6.15q0-2.825-1.812-4.488Q20.375 0 18 0t-4.188 1.662Q12 3.325 12 6.15q0 1.875 1.488 4.075Q14.975 12.425 18 15Zm-1.85-6 .7-2.275L15 5.25h2.275L18 3l.725 2.25H21l-1.85 1.475.7 2.275L18 7.6ZM12 16.5q-1.05 0-1.775-.725Q9.5 15.05 9.5 14q0-1 .675-1.725.675-.725 1.775-.775.65.95 1.175 1.562.525.613 1.325 1.413-.15.875-.85 1.45T12 16.5ZM2 22V6h5.175L9 4h1.25q-.125.5-.188 1.088Q10 5.675 10 6.225q0 .8.2 1.675t.675 1.75Q9.4 9.975 8.45 11.2 7.5 12.425 7.5 14q0 1.875 1.312 3.188Q10.125 18.5 12 18.5q1.3 0 2.388-.675 1.087-.675 1.637-1.825.4.35.975.837.575.488 1 .838 1.075-.875 2.062-1.775Q21.05 15 22 14v8Z"/>
    </Icon>
  );
});

IconMaterialLocalSeeFilled.displayName = 'AmauiIconMaterialLocalSeeFilled';

export default IconMaterialLocalSeeFilled;
