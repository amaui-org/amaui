import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOilBarrel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrel'

      short_name='OilBarrel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2v-6H3v-2h2V5H3V3h18v2h-2v6h2v2h-2v6h2v2Zm4-2h10v-6h-1v-2h1V5H7v6h1v2H7Zm5-3q1.25 0 2.125-.863.875-.862.875-2.087 0-.975-.562-1.675-.563-.7-2.438-2.875-1.875 2.15-2.438 2.862Q9 12.075 9 13.05q0 1.225.875 2.087Q10.75 16 12 16Zm-5 3V5v14Z"/>
    </Icon>
  );
});

IconMaterialOilBarrel.displayName = 'AmauiIconMaterialOilBarrel';

export default IconMaterialOilBarrel;
