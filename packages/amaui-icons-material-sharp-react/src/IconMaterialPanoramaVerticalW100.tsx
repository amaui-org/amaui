import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaVerticalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaVerticalW100'

      short_name='PanoramaVertical'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.475 20.725q.575-2.025.938-4.037.362-2.013.362-4.663 0-2.65-.362-4.663-.363-2.012-.938-4.037h13.05q-.575 2.025-.963 4.037-.387 2.013-.387 4.663 0 2.65.387 4.663.388 2.012.963 4.037Zm12.15-.7q-.575-1.95-.862-3.963-.288-2.012-.288-4.037t.288-4.038q.287-2.012.862-3.962H6.375q.575 1.95.838 3.962.262 2.013.262 4.038 0 2.025-.262 4.037-.263 2.013-.838 3.963Zm-5.625-8Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100.displayName = 'AmauiIconMaterialPanoramaVerticalW100';

export default IconMaterialPanoramaVerticalW100;
