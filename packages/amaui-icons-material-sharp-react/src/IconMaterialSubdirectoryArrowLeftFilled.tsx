import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftFilled'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 21-6-6 6.025-6.025 1.4 1.425-3.6 3.6H17V4h2v12H7.825l3.6 3.575Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftFilled.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftFilled';

export default IconMaterialSubdirectoryArrowLeftFilled;
