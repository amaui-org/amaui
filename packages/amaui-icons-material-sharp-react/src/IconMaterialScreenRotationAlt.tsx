import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationAlt'

      short_name='ScreenRotationAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.6 22.8 3.75 13H6.6l7 7 5-5H16v-2h6v6h-2v-2.6ZM2 11V5h2v2.6l6.4-6.4 9.85 9.8H17.4l-7-7-5 5H8v2Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationAlt.displayName = 'AmauiIconMaterialScreenRotationAlt';

export default IconMaterialScreenRotationAlt;
