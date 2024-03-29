import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSheetsRtlFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlFilled'

      short_name='SheetsRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.3 21.3-2.6-2.6q-.3-.3-.3-.7 0-.4.3-.7l2.6-2.6q.3-.3.7-.3.4 0 .7.3.3.3.288.712-.013.413-.288.713L6.825 17H19q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 19 19 19H6.825l.875.875q.275.3.288.712Q8 21 7.7 21.3t-.7.3q-.4 0-.7-.3ZM5.5 13q-.625 0-1.062-.438Q4 12.125 4 11.5v-9q0-.625.438-1.062Q4.875 1 5.5 1h13q.625 0 1.062.438Q20 1.875 20 2.5v9q0 .625-.438 1.062Q19.125 13 18.5 13ZM6 6h5V3H6Zm7 0h5V3h-5Zm-2 5V8H6v3Zm2 0h5V8h-5Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlFilled.displayName = 'AmauiIconMaterialSheetsRtlFilled';

export default IconMaterialSheetsRtlFilled;
