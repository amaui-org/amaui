import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCapture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Capture'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm80-80h640V336H160v480Zm80-80h480V416H240v320Z"/>
    </Icon>
  );
});

IconMaterialCapture.displayName = 'AmauiIconMaterialCapture';

export default IconMaterialCapture;
