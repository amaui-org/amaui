import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowW100'

      short_name='Window'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.2 20.7H4.8q-.65 0-1.075-.425Q3.3 19.85 3.3 19.2V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Zm-7.55-9.05V4H4.8q-.3 0-.55.25Q4 4.5 4 4.8v6.85Zm0 .7H4v6.85q0 .3.25.55.25.25.55.25h6.85Zm.7 0V20h6.85q.3 0 .55-.25.25-.25.25-.55v-6.85Zm0-.7H20V4.8q0-.3-.25-.55Q19.5 4 19.2 4h-6.85Z"/>
    </Icon>
  );
});

IconMaterialWindowW100.displayName = 'AmauiIconMaterialWindowW100';

export default IconMaterialWindowW100;
