import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardwareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareW100'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.35 19.7q-.275 0-.487-.213-.213-.212-.213-.487V6.7H5.9q.375-1.1 1.325-1.75.95-.65 2.125-.65h3.2q.625 0 1.063.437.437.438.437 1.063v1.35L16.7 4.5q.075-.075.213-.138.137-.062.262-.062.175 0 .3.125t.125.3v5.55q0 .175-.112.3-.113.125-.313.125-.125 0-.262-.063-.138-.062-.213-.137l-2.65-2.65V19q0 .275-.212.487-.213.213-.488.213Zm2-7.7Zm-2 7h2v-6.65h-2Zm0-7.35h2V5.8q0-.35-.225-.575Q12.9 5 12.55 5h-3.2q-.65 0-1.237.25Q7.525 5.5 7.1 6h4.25Zm2 0V5 11.65Zm0 7.35v-6.65V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareW100.displayName = 'AmauiIconMaterialHardwareW100';

export default IconMaterialHardwareW100;
