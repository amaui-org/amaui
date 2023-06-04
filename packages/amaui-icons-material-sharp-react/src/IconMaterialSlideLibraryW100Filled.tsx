import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideLibraryW100Filled'

      short_name='SlideLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.65 11.65-.95-2.125-2.125-.95L16.7 7.65l.95-2.125.925 2.125 2.125.925-2.125.95ZM3.3 20.7V7.3h8.925q-.075.325-.112.638-.038.312-.038.637 0 2.325 1.625 3.95t3.95 1.625q.8 0 1.588-.238.787-.237 1.462-.687V20.7Z"/>
    </Icon>
  );
});

IconMaterialSlideLibraryW100Filled.displayName = 'AmauiIconMaterialSlideLibraryW100Filled';

export default IconMaterialSlideLibraryW100Filled;
