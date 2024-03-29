import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMixtureMedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedFilled'

      short_name='MixtureMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22.5 6 21v-4H5q-.825 0-1.413-.587Q3 15.825 3 15V7.5H2v-2h4V4H4.5V2h5v2H8v1.5h4v2h-1V15q0 .825-.587 1.413Q9.825 17 9 17H8Zm9-.5q-1.65 0-2.825-1.175Q13 19.65 13 18v-8q0-1.65 1.175-2.825Q15.35 6 17 6q1.65 0 2.825 1.175Q21 8.35 21 10v8q0 1.65-1.175 2.825Q18.65 22 17 22ZM5 15h4v-1.5H6.5V12H9v-1.5H6.5V9H9V7.5H5V15Zm10 1h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedFilled.displayName = 'AmauiIconMaterialMixtureMedFilled';

export default IconMaterialMixtureMedFilled;
