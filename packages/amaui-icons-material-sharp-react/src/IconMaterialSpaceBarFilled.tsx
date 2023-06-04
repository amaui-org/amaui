import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpaceBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarFilled'

      short_name='SpaceBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 15V9h2v4h12V9h2v6Z"/>
    </Icon>
  );
});

IconMaterialSpaceBarFilled.displayName = 'AmauiIconMaterialSpaceBarFilled';

export default IconMaterialSpaceBarFilled;
