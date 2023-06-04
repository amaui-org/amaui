import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholdingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingW100'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm12.05-.7H19v-2.65ZM5.475 19h2.65l3-3h.975l-3 3h2.65l3-3h.975l-3 3h2.65l3-3H19V5H5v13.5L7.5 16h.975Zm2.175-5.925-.475-.475 3.5-3.5 2 2 3.675-3.675.475.475-4.15 4.175-2-2ZM5 19V5v13.5Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingW100.displayName = 'AmauiIconMaterialDataThresholdingW100';

export default IconMaterialDataThresholdingW100;
