import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100Filled'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 11.65V3.3h6.85q.65 0 1.075.425.425.425.425 1.075v6.85Zm0 9.05v-8.35h8.35v6.85q0 .65-.425 1.075-.425.425-1.075.425ZM3.3 11.65V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h6.85v8.35Zm1.5 9.05q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2v-6.85h8.35v8.35Z"/>
    </Icon>
  );
});

IconMaterialWindowW100Filled.displayName = 'AmauiIconMaterialWindowW100Filled';

export default IconMaterialWindowW100Filled;
