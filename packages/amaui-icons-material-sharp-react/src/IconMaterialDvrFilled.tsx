import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDvrFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DvrFilled'

      short_name='Dvr'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 10h9V8H9Zm0 4h9v-2H9Zm-2-4q.425 0 .713-.288Q8 9.425 8 9t-.287-.713Q7.425 8 7 8t-.713.287Q6 8.575 6 9t.287.712Q6.575 10 7 10Zm0 4q.425 0 .713-.288Q8 13.425 8 13t-.287-.713Q7.425 12 7 12t-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm1 7v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialDvrFilled.displayName = 'AmauiIconMaterialDvrFilled';

export default IconMaterialDvrFilled;
