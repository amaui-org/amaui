import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormalW100'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.75 5.15-.625-.275q-.25-.1-.25-.375t.25-.375l.625-.275.275-.625q.1-.25.375-.25t.375.25l.275.625.625.275q.25.1.25.375t-.25.375l-.625.275-.275.625q-.1.25-.375.25t-.375-.25ZM5.2 20.1l-1.4-1.4q-.2-.2-.2-.5t.2-.5l9.8-9.75q.2-.2.5-.2t.5.2l1.4 1.4q.2.2.2.5t-.2.5L6.2 20.1q-.2.2-.5.2t-.5-.2Zm.5-.5 7.2-7.2-1.4-1.4-7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormalW100.displayName = 'AmauiIconMaterialAutoFixNormalW100';

export default IconMaterialAutoFixNormalW100;
