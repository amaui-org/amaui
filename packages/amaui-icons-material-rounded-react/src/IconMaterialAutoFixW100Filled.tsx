import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixW100Filled'

      short_name='AutoFix'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.4 6.55-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65Zm-10.85 0-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM19.4 17.4l-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM5.2 20.1l-1.4-1.4q-.2-.2-.2-.5t.2-.5l9.8-9.75q.2-.2.5-.2t.5.2l1.4 1.4q.2.2.2.5t-.2.5L6.2 20.1q-.2.2-.5.2t-.5-.2Zm8.875-8.875 1.4-1.4-1.4-1.4-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixW100Filled.displayName = 'AmauiIconMaterialAutoFixW100Filled';

export default IconMaterialAutoFixW100Filled;
