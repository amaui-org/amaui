import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptureFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptureFilled'

      short_name='Capture'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v640H80Zm160-160h480V416H240v320Z"/>
    </Icon>
  );
});

IconMaterialCaptureFilled.displayName = 'AmauiIconMaterialCaptureFilled';

export default IconMaterialCaptureFilled;
