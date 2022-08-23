import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomRoundedFilled'
      short_name='VerticalAlignBottom'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM12 16.575Q11.8 16.575 11.625 16.512Q11.45 16.45 11.3 16.3L7.675 12.675Q7.4 12.4 7.4 12Q7.4 11.6 7.7 11.3Q7.975 11.025 8.4 11.025Q8.825 11.025 9.1 11.3L11 13.2V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V13.2L14.925 11.275Q15.2 11 15.6 11Q16 11 16.3 11.3Q16.575 11.575 16.575 12Q16.575 12.425 16.3 12.7L12.7 16.3Q12.55 16.45 12.375 16.512Q12.2 16.575 12 16.575Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomRoundedFilled.displayName = 'AmauiIconMaterialVerticalAlignBottomRoundedFilled';

export default IconMaterialVerticalAlignBottomRoundedFilled;
