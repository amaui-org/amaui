import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardwareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareW100Filled'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.35 19.7q-.275 0-.487-.213-.213-.212-.213-.487v-6.65h3.4V19q0 .275-.212.487-.213.213-.488.213Zm5.825-9q-.125 0-.262-.063-.138-.062-.213-.137l-2.65-2.65v3.8h-3.4V6.7H5.9q.375-1.1 1.325-1.75.95-.65 2.125-.65h3.2q.625 0 1.063.437.437.438.437 1.063v1.35L16.7 4.5q.075-.075.213-.138.137-.062.262-.062.175 0 .3.125t.125.3v5.55q0 .175-.112.3-.113.125-.313.125Z"/>
    </Icon>
  );
});

IconMaterialHardwareW100Filled.displayName = 'AmauiIconMaterialHardwareW100Filled';

export default IconMaterialHardwareW100Filled;
