import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGppMaybeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GppMaybeFilled'

      short_name='GppMaybe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12h2V7h-2Zm1 4q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Zm0 6q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V5l8-3 8 3v6.1q0 3.8-2.262 6.912Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialGppMaybeFilled.displayName = 'AmauiIconMaterialGppMaybeFilled';

export default IconMaterialGppMaybeFilled;
