import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureNeg1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1Filled'

      short_name='ExposureNeg1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14q-.425 0-.712-.288Q3 13.425 3 13t.288-.713Q3.575 12 4 12h5q.425 0 .713.287.287.288.287.713t-.287.712Q9.425 14 9 14Zm12.875 5q-.475 0-.8-.325-.325-.325-.325-.8V8.05L14.3 9.1q-.35.275-.762.187-.413-.087-.663-.462-.25-.35-.162-.788.087-.437.437-.687l2.45-1.775q.35-.25.838-.263.487-.012.837.188.3.175.513.55.212.375.212.725v11.1q0 .475-.325.8-.325.325-.8.325Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1Filled.displayName = 'AmauiIconMaterialExposureNeg1Filled';

export default IconMaterialExposureNeg1Filled;
