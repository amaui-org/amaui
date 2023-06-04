import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFailedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFailedFilled'

      short_name='SmsFailed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11h2V5h-2Zm1 4q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialSmsFailedFilled.displayName = 'AmauiIconMaterialSmsFailedFilled';

export default IconMaterialSmsFailedFilled;
