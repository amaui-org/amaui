import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthRoundedW700Filled'
      short_name='TrailLength'

      {...props}
    >
      <path d="M6.8 17.575V14.425H12Q11.875 14.225 11.788 14.012Q11.7 13.8 11.65 13.575H8.8V10.425H11.65Q11.7 10.2 11.788 9.987Q11.875 9.775 12 9.575H2.425V6.425H17Q19.325 6.425 20.95 8.05Q22.575 9.675 22.575 12Q22.575 14.3 20.95 15.938Q19.325 17.575 17 17.575ZM1.425 13.575V10.425H7.8V13.575ZM2.425 17.575V14.425H5.8V17.575Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthRoundedW700Filled;
