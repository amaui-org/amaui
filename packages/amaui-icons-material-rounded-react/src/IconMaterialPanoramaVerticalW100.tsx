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
      <path d="M6.375 20.725q-.45 0-.612-.287-.163-.288-.038-.663.35-1.175.7-3.15.35-1.975.35-4.6 0-2.65-.35-4.587-.35-1.938-.7-3.113-.125-.375.038-.688.162-.312.612-.312h11.25q.45 0 .613.312.162.313.037.688-.35 1.175-.725 3.113-.375 1.937-.375 4.587 0 2.625.387 4.6.388 1.975.713 3.15.125.375-.037.663-.163.287-.613.287Zm11.25-.7q-.575-1.95-.862-3.963-.288-2.012-.288-4.037t.288-4.038q.287-2.012.862-3.962H6.375q.575 1.95.838 3.962.262 2.013.262 4.038 0 2.025-.262 4.037-.263 2.013-.838 3.963Zm-5.625-8Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100.displayName = 'AmauiIconMaterialPanoramaVerticalW100';

export default IconMaterialPanoramaVerticalW100;
