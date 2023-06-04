import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClimateMiniSplitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClimateMiniSplitW100Filled'

      short_name='ClimateMiniSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 12q-.625 0-1.063-.438Q3.3 11.125 3.3 10.5V6.1q0-.625.437-1.063Q4.175 4.6 4.8 4.6h14.4q.625 0 1.063.437.437.438.437 1.063v4.4q0 .625-.437 1.062Q19.825 12 19.2 12h-2.075V9.45q0-.625-.437-1.063-.438-.437-1.063-.437H8.4q-.625 0-1.062.437Q6.9 8.825 6.9 9.45V12Zm2.8 0V9.45q0-.35.225-.575.225-.225.575-.225h7.225q.35 0 .575.225.225.225.225.575V12Zm.35 2.15q.15 0 .25.1t.1.25q0 1.375-.962 2.337Q6.375 17.8 5 17.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.262.1-.113.25-.113 1.075 0 1.838-.763.762-.762.762-1.837 0-.15.1-.238.1-.087.25-.087Zm8.1 0q-.15 0-.25.1t-.1.25q0 1.375.975 2.337.975.963 2.35.963.15 0 .238-.1.087-.1.087-.25t-.1-.262q-.1-.113-.25-.113-1.075 0-1.837-.763-.763-.762-.763-1.837 0-.15-.1-.238-.1-.087-.25-.087ZM12 18.85q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialClimateMiniSplitW100Filled.displayName = 'AmauiIconMaterialClimateMiniSplitW100Filled';

export default IconMaterialClimateMiniSplitW100Filled;
