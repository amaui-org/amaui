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
      <path d="M6.375 20.725q-.45 0-.612-.287-.163-.288-.038-.663.35-1.175.7-3.15.35-1.975.35-4.6 0-2.65-.35-4.587-.35-1.938-.7-3.113-.125-.375.038-.688.162-.312.612-.312h11.25q.45 0 .613.312.162.313.037.688-.35 1.175-.725 3.113-.375 1.937-.375 4.587 0 2.625.387 4.6.388 1.975.713 3.15.125.375-.037.663-.163.287-.613.287Z"/>
    </Icon>
  );
});

IconMaterialPanoramaVerticalW100Filled.displayName = 'AmauiIconMaterialPanoramaVerticalW100Filled';

export default IconMaterialPanoramaVerticalW100Filled;
