import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TitleW100Filled'

      short_name='Title'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.85q-.15 0-.25-.1t-.1-.25V5.85H6.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.15V18.5q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialTitleW100Filled.displayName = 'AmauiIconMaterialTitleW100Filled';

export default IconMaterialTitleW100Filled;
