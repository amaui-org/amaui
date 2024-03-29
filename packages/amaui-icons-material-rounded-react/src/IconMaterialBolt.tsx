import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bolt'

      short_name='Bolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.675 21q-.275 0-.45-.2t-.125-.475L11 14H7.5q-.375 0-.463-.2-.087-.2.113-.55l5.7-9.975q.05-.125.2-.2Q13.2 3 13.325 3q.275 0 .45.2t.125.475L13 10h3.5q.375 0 .462.2.088.2-.112.55l-5.7 9.975q-.05.125-.2.2-.15.075-.275.075Z"/>
    </Icon>
  );
});

IconMaterialBolt.displayName = 'AmauiIconMaterialBolt';

export default IconMaterialBolt;
