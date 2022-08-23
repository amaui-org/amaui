import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftSharpFilled'
      short_name='SubdirectoryArrowLeft'

      {...props}
    >
      <path d="M10 21 4 15 10.025 8.975 11.425 10.4 7.825 14H17V4H19V16H7.825L11.425 19.575Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftSharpFilled.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftSharpFilled';

export default IconMaterialSubdirectoryArrowLeftSharpFilled;
