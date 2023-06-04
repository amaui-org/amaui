import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsW100'

      short_name='TableRows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 18.2v-3.075H5V18.2q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2Zm0-3.775v-4.85H5v4.85h14Zm0-5.55V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v3.075h14ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialTableRowsW100.displayName = 'AmauiIconMaterialTableRowsW100';

export default IconMaterialTableRowsW100;
