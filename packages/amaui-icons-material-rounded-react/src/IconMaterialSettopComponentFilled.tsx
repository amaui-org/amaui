import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettopComponentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettopComponentFilled'

      short_name='SettopComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17V7h20v10Zm3-4h6v-2H5Zm9 0q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13Zm3 0q.425 0 .712-.288Q18 12.425 18 12t-.288-.713Q17.425 11 17 11t-.712.287Q16 11.575 16 12t.288.712Q16.575 13 17 13Z"/>
    </Icon>
  );
});

IconMaterialSettopComponentFilled.displayName = 'AmauiIconMaterialSettopComponentFilled';

export default IconMaterialSettopComponentFilled;
