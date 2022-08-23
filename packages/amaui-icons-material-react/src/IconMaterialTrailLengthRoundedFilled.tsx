import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthRoundedFilled'
      short_name='TrailLength'

      {...props}
    >
      <path d="M7 17V15H13Q12.65 14.575 12.438 14.075Q12.225 13.575 12.1 13H9V11H12.1Q12.225 10.425 12.438 9.925Q12.65 9.425 13 9H3V7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17ZM2 13V11H8V13ZM3 17V15H6V17Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthRoundedFilled.displayName = 'AmauiIconMaterialTrailLengthRoundedFilled';

export default IconMaterialTrailLengthRoundedFilled;
