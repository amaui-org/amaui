import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodOutlinedW700Filled'
      short_name='RangeHood'

      {...props}
    >
      <path d="M1.8 11.625 6.225 6.95V2.225h11.55V6.95l4.45 4.675Zm2.575 9.15q-1.3 0-2.225-.925t-.925-2.225v-4h21.55v4q0 1.3-.925 2.225t-2.225.925Zm4.1-4.225h7.05v-1.875h-7.05Z"/>
    </Icon>
  )
});

export default IconMaterialRangeHoodOutlinedW700Filled;
