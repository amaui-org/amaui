import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksW100Filled'

      short_name='Looks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 17q-.15 0-.25-.1t-.1-.25q.125-2.275 1.775-3.813Q9.725 11.3 12 11.3t3.925 1.537q1.65 1.538 1.775 3.813 0 .15-.1.25t-.25.1q-.125 0-.225-.1T17 16.65q-.125-1.95-1.575-3.3Q13.975 12 12 12q-1.975 0-3.425 1.35Q7.125 14.7 7 16.65q-.025.15-.112.25-.088.1-.238.1Zm-4 0q-.15 0-.25-.1t-.1-.25q.075-1.95.863-3.65.787-1.7 2.1-2.975 1.312-1.275 3.049-2Q10.05 7.3 12 7.3q1.95 0 3.688.725 1.737.725 3.05 2Q20.05 11.3 20.837 13q.788 1.7.863 3.65 0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25q-.125-3.625-2.738-6.138Q15.65 8 12 8q-3.65 0-6.263 2.512Q3.125 13.025 3 16.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialLooksW100Filled.displayName = 'AmauiIconMaterialLooksW100Filled';

export default IconMaterialLooksW100Filled;
