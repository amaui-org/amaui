import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalW100Filled'

      short_name='PanoramaVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.475 20.725q.575-2.025.938-4.037.362-2.013.362-4.663 0-2.65-.362-4.663-.363-2.012-.938-4.037h13.05q-.575 2.025-.963 4.037-.387 2.013-.387 4.663 0 2.65.387 4.663.388 2.012.963 4.037Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100Filled.displayName = 'AmauiIconMaterialPanoramaVerticalW100Filled';

export default IconMaterialPanoramaVerticalW100Filled;
