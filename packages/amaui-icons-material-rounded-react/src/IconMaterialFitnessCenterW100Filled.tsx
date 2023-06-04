import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitnessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterW100Filled'

      short_name='FitnessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.275 20.875q-.15-.15-.15-.375t.15-.375l3.175-3.175-9.4-9.4-3.175 3.175q-.15.15-.375.15t-.375-.15q-.15-.15-.15-.375t.15-.375L4.2 8.9l-.225-.225Q3.75 8.45 3.75 8.15q0-.3.225-.525L5.55 6.05 4.4 4.9q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l1.15 1.15 1.575-1.575q.225-.225.525-.225.3 0 .525.225L8.9 4.2l1.075-1.075q.15-.15.375-.15t.375.15q.15.15.15.375t-.15.375L7.55 7.05l9.4 9.4 3.175-3.175q.15-.15.375-.15t.375.15q.15.15.15.375t-.15.375L19.8 15.1l.225.225q.225.225.225.525 0 .3-.225.525L18.45 17.95l1.15 1.15q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-1.15-1.15-1.575 1.575q-.225.225-.525.225-.3 0-.525-.225L15.1 19.8l-1.075 1.075q-.15.15-.375.15t-.375-.15Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterW100Filled.displayName = 'AmauiIconMaterialFitnessCenterW100Filled';

export default IconMaterialFitnessCenterW100Filled;
