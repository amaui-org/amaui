import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanFilled'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 456h200L520 256v200ZM160 976V776h640v200H160ZM40 696v-80h880v80H40Zm120-160V176h400l240 240v120H160Z"/>
    </Icon>
  );
});

IconMaterialScanFilled.displayName = 'AmauiIconMaterialScanFilled';

export default IconMaterialScanFilled;
