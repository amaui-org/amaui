import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScaleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScaleFilled'

      short_name='Scale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22q0-2.775.737-4.738Q3.475 15.3 4.625 14T7.2 11.987Q8.625 11.275 10 11V8q-3.425-.425-5.713-2.113Q2 4.2 2 2h20q0 2.2-2.288 3.887Q17.425 7.575 14 8v3q1.375.275 2.8.987 1.425.713 2.575 2.013 1.15 1.3 1.888 3.262Q22 19.225 22 22h-6v-2h3.875q-.45-3.8-2.837-5.5Q14.65 12.8 12 12.8q-2.65 0-5.037 1.7-2.388 1.7-2.838 5.5H8v2Zm10 0q-.825 0-1.412-.587Q10 20.825 10 20q0-.425.163-.775.162-.35.437-.625.6-.6 2.025-1.263Q14.05 16.675 16 16q-.7 1.95-1.35 3.375Q14 20.8 13.4 21.4q-.275.275-.625.437Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialScaleFilled.displayName = 'AmauiIconMaterialScaleFilled';

export default IconMaterialScaleFilled;
