import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeFilled'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-2.05.775-3.863Q3.55 6.325 4.9 4.962 6.25 3.6 8.075 2.8 9.9 2 12 2h.35Q10.925 4.45 11 7.062q.075 2.613 1.275 4.788 1.2 2.175 3.388 3.6 2.187 1.425 4.987 1.525-1.3 2.275-3.575 3.65Q14.8 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialBedtimeFilled.displayName = 'AmauiIconMaterialBedtimeFilled';

export default IconMaterialBedtimeFilled;
