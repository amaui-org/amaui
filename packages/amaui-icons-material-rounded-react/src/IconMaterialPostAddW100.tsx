import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPostAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddW100'

      short_name='PostAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 10.35q-.15 0-.25-.1T8 10q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3q-.15 0-.25-.1T8 13q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3q-.15 0-.25-.1T8 16q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM18 7.7q-.15 0-.25-.1t-.1-.25V5.7H16q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T16 5h1.65V3.35q0-.15.1-.25T18 3q.15 0 .25.1t.1.25V5H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.65v1.65q0 .15-.1.25t-.25.1Zm-12.85 12q-.65 0-1.075-.425-.425-.425-.425-1.075V5.8q0-.65.425-1.075Q4.5 4.3 5.15 4.3h9.05q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.15q-.3 0-.55.25-.25.25-.25.55v12.4q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55V9.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.05q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPostAddW100.displayName = 'AmauiIconMaterialPostAddW100';

export default IconMaterialPostAddW100;
