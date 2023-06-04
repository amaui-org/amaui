import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRight'

      short_name='SubdirectoryArrowRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRight.displayName = 'AmauiIconMaterialSubdirectoryArrowRight';

export default IconMaterialSubdirectoryArrowRight;
