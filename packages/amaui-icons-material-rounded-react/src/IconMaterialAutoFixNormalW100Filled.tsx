import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormalW100Filled'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.75 5.15-.625-.275q-.25-.125-.25-.375t.25-.375l.625-.275.275-.625q.125-.25.375-.25t.375.25l.275.625.625.275q.25.125.25.375t-.25.375l-.625.275-.275.625q-.125.25-.375.25t-.375-.25ZM5.2 20.1l-1.4-1.4q-.2-.2-.2-.5t.2-.5l9.8-9.75q.2-.2.5-.2t.5.2l1.4 1.4q.2.2.2.5t-.2.5L6.2 20.1q-.2.2-.5.2t-.5-.2Zm8.875-8.875 1.4-1.4-1.4-1.4-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormalW100Filled.displayName = 'AmauiIconMaterialAutoFixNormalW100Filled';

export default IconMaterialAutoFixNormalW100Filled;
