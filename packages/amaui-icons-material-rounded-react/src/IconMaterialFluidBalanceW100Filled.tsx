import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFluidBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FluidBalanceW100Filled'

      short_name='FluidBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062h-5.9q-1.65 0-2.825 1.175Q10.8 9.15 10.8 10.8v3.55q0 1.175.262 2.3.263 1.125.963 2.05Zm13.35 2.4q-.625 0-1.062-.437-.438-.438-.438-1.063v-.925q-1.425-.125-2.387-1.25Q13.3 16.3 13.3 14.35V10.8q0-.625.438-1.063.437-.437 1.062-.437h4.4q.625 0 1.063.437.437.438.437 1.063V15q0 1.45-.962 2.5-.963 1.05-2.388 1.175v.925q0 .35.225.575.225.225.575.225H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.6-6.45H20V10.8q0-.325-.237-.562Q19.525 10 19.2 10h-4.4q-.35 0-.575.238-.225.237-.225.562v1.85h.75q.65 0 1.25.3t1.025.85q.3.425.763.638.462.212.962.212Zm-8.3-4.3q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm0 4q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialFluidBalanceW100Filled.displayName = 'AmauiIconMaterialFluidBalanceW100Filled';

export default IconMaterialFluidBalanceW100Filled;
