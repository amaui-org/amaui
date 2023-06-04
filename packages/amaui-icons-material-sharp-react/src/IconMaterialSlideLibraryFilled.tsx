import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryFilled'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 14.025-1.55-3.475L11.975 9l3.475-1.55L17 4l1.55 3.45L22 9l-3.45 1.55ZM2 22V6h8.65q-.35.725-.512 1.475-.163.75-.163 1.55 0 2.925 2.038 4.962 2.037 2.038 4.962 2.038 1.425 0 2.725-.538 1.3-.537 2.3-1.562V22Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryFilled.displayName = 'AmauiIconMaterialSlideLibraryFilled';

export default IconMaterialSlideLibraryFilled;
