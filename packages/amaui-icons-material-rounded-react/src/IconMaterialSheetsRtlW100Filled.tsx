import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSheetsRtlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100Filled'

      short_name='SheetsRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.3 21.3-2.775-2.775Q3.3 18.3 3.3 18q0-.3.225-.525L6.3 14.7q.3-.3.7-.3.4 0 .7.3.3.3.288.712-.013.413-.288.713L6.825 17H19q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19H6.825l.875.875q.275.3.288.712Q8 21 7.7 21.3t-.7.3q-.4 0-.7-.3ZM5.125 13q-.475 0-.8-.325Q4 12.35 4 11.875v-9.75q0-.475.325-.8Q4.65 1 5.125 1h13.75q.475 0 .8.325.325.325.325.8v9.75q0 .475-.325.8-.325.325-.8.325ZM6 6h5V3H6.6q-.25 0-.425.175T6 3.6Zm7 0h5V3.6q0-.25-.175-.425T17.4 3H13Zm-2 5V8H6v2.4q0 .25.175.425T6.6 11Zm2 0h4.4q.25 0 .425-.175T18 10.4V8h-5Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100Filled.displayName = 'AmauiIconMaterialSheetsRtlW100Filled';

export default IconMaterialSheetsRtlW100Filled;
