import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthRoundedW100Filled'
      short_name='TrailLength'

      {...props}
    >
      <path d="M7.15 16.35V15.65H14.625Q13.625 14.975 13.163 14.1Q12.7 13.225 12.65 12.35H8.85V11.65H12.65Q12.75 10.725 13.213 9.85Q13.675 8.975 14.625 8.35H3.65V7.65H17Q18.8 7.65 20.075 8.925Q21.35 10.2 21.35 12Q21.35 13.8 20.075 15.075Q18.8 16.35 17 16.35ZM2.65 12.35V11.65H7.85V12.35ZM3.65 16.35V15.65H6.15V16.35Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthRoundedW100Filled.displayName = 'AmauiIconMaterialTrailLengthRoundedW100Filled';

export default IconMaterialTrailLengthRoundedW100Filled;
