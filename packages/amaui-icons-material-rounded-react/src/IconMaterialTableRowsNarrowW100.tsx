import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 709V590H200v119h560Zm0-147V443H200v119h560Zm0-147v-87q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v87h560ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm528-60v-87H200v87q0 14 9 23t23 9h496q14 0 23-9t9-23Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100.displayName = 'AmauiIconMaterialTableRowsNarrowW100';

export default IconMaterialTableRowsNarrowW100;
