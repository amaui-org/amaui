import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathtubW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathtubW100Filled'

      short_name='Bathtub'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 10.75q-.575 0-.962-.387Q5.8 9.975 5.8 9.4t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.963q-.388.387-.963.387ZM4.8 20.7v-1H3.3v-5.4h2.5v-.75q0-.725.512-1.238.513-.512 1.238-.512.45 0 .85.2.4.2.7.55l.9 1.05q.2.2.388.375.187.175.412.325h6.55V6.05q0-.625-.437-1.063-.438-.437-1.063-.437-.275 0-.512.125Q15.1 4.8 14.9 5l-1.25 1.25q.125.425.05.838-.075.412-.3.762L11.55 6q.35-.225.75-.288.4-.062.8.088l1.25-1.25q.3-.3.688-.5.387-.2.812-.2.925 0 1.563.637.637.638.637 1.563v8.25h2.65v5.4h-1.5v1Z"/>
    </Icon>
  );
});

IconMaterialBathtubW100Filled.displayName = 'AmauiIconMaterialBathtubW100Filled';

export default IconMaterialBathtubW100Filled;
