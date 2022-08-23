import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVrpanoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoSharpFilled'
      short_name='Vrpano'

      {...props}
    >
      <path d="M5.5 15.4Q7 15.2 8.613 15.1Q10.225 15 12 15Q13.725 15 15.363 15.1Q17 15.2 18.5 15.4L14 10L11.15 13.4L9.15 11ZM2.025 20.5V3.475Q3.9 4.35 6.525 4.925Q9.15 5.5 12.025 5.5Q14.9 5.5 17.525 4.925Q20.15 4.35 22.025 3.475V20.5Q20.15 19.625 17.525 19.062Q14.9 18.5 12.025 18.5Q9.15 18.5 6.525 19.062Q3.9 19.625 2.025 20.5Z"/>
    </Icon>
  );
});

IconMaterialVrpanoSharpFilled.displayName = 'AmauiIconMaterialVrpanoSharpFilled';

export default IconMaterialVrpanoSharpFilled;
