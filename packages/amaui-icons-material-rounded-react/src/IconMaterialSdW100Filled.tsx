import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdW100Filled'

      short_name='Sd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 14.6h3q.275 0 .438-.162Q11 14.275 11 14v-1.75q0-.275-.162-.438-.163-.162-.438-.162H7.5V10.1h2.8v.5h.7V10q0-.275-.162-.438-.163-.162-.438-.162h-3q-.275 0-.437.162Q6.8 9.725 6.8 10v1.75q0 .275.163.438.162.162.437.162h2.9v1.55H7.5v-.5h-.7v.6q0 .275.163.438.162.162.437.162Zm5.6 0h3.1q.45 0 .775-.325t.325-.775v-3q0-.45-.325-.775T16.1 9.4H13Zm.7-.7h2.4q.15 0 .275-.125.125-.125.125-.275v-3q0-.15-.125-.275-.125-.125-.275-.125h-2.4Zm-8.9 4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSdW100Filled.displayName = 'AmauiIconMaterialSdW100Filled';

export default IconMaterialSdW100Filled;
