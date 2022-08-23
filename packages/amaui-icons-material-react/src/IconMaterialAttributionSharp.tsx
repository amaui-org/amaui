import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttributionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionSharp'
      short_name='Attribution'

      {...props}
    >
      <path d="M10.75 19H13.25V14.5H14.75V8.5H9.25V14.5H10.75ZM12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20ZM12 8Q12.65 8 13.075 7.575Q13.5 7.15 13.5 6.5Q13.5 5.85 13.075 5.425Q12.65 5 12 5Q11.35 5 10.925 5.425Q10.5 5.85 10.5 6.5Q10.5 7.15 10.925 7.575Q11.35 8 12 8ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialAttributionSharp.displayName = 'AmauiIconMaterialAttributionSharp';

export default IconMaterialAttributionSharp;
