import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSheetsRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100'

      short_name='SheetsRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 12.45v-9.4h13.4v9.4ZM6 7.4h5.65V3.75H6Zm6.35 0H18V3.75h-5.65ZM6 11.75h5.65V8.1H6Zm6.35 0H18V8.1h-5.65ZM7 20.325 3.925 17.25 7 14.175l.5.475-2.225 2.25H19.35v.7H5.275L7.5 19.85Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100.displayName = 'AmauiIconMaterialSheetsRtlW100';

export default IconMaterialSheetsRtlW100;
