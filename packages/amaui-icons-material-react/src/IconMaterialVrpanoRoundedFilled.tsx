import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVrpanoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoRoundedFilled'
      short_name='Vrpano'

      {...props}
    >
      <path d="M6.85 15.25Q8.05 15.125 9.338 15.062Q10.625 15 12 15Q13.35 15 14.638 15.062Q15.925 15.125 17.15 15.25Q17.575 15.3 17.738 15Q17.9 14.7 17.625 14.35L14.375 10.45Q14.225 10.275 14 10.275Q13.775 10.275 13.625 10.45L11.15 13.4L9.525 11.45Q9.4 11.275 9.163 11.275Q8.925 11.275 8.775 11.475L6.375 14.35Q6.1 14.7 6.25 15Q6.4 15.3 6.85 15.25ZM3 20Q2.575 20 2.288 19.712Q2 19.425 2 19V5Q2 4.575 2.288 4.287Q2.575 4 3 4Q3.425 4 5.725 4.75Q8.025 5.5 12 5.5Q16 5.5 18.288 4.75Q20.575 4 21 4Q21.425 4 21.712 4.287Q22 4.575 22 5V19Q22 19.425 21.712 19.712Q21.425 20 21 20Q20.575 20 18.288 19.25Q16 18.5 12 18.5Q8.025 18.5 5.725 19.25Q3.425 20 3 20Z"/>
    </Icon>
  );
});

IconMaterialVrpanoRoundedFilled.displayName = 'AmauiIconMaterialVrpanoRoundedFilled';

export default IconMaterialVrpanoRoundedFilled;
