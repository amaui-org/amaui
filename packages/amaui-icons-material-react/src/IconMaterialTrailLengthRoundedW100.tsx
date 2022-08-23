import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthRoundedW100'
      short_name='TrailLength'

      {...props}
    >
      <path d="M7.15 16.35V15.65H14.625Q13.625 14.975 13.163 14.1Q12.7 13.225 12.65 12.35H8.85V11.65H12.65Q12.75 10.725 13.213 9.85Q13.675 8.975 14.625 8.35H3.65V7.65H17Q18.8 7.65 20.075 8.925Q21.35 10.2 21.35 12Q21.35 13.8 20.075 15.075Q18.8 16.35 17 16.35ZM17 15.65Q18.5 15.65 19.575 14.575Q20.65 13.5 20.65 12Q20.65 10.5 19.575 9.425Q18.5 8.35 17 8.35Q15.5 8.35 14.425 9.425Q13.35 10.5 13.35 12Q13.35 13.5 14.425 14.575Q15.5 15.65 17 15.65ZM2.65 12.35V11.65H7.85V12.35ZM3.65 16.35V15.65H6.15V16.35ZM17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthRoundedW100.displayName = 'AmauiIconMaterialTrailLengthRoundedW100';

export default IconMaterialTrailLengthRoundedW100;
