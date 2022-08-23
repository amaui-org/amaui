import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputRoundedFilled'
      short_name='Input'

      {...props}
    >
      <path d="M10.8 15.775Q10.5 15.475 10.512 15.062Q10.525 14.65 10.825 14.35L12.175 13H3Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H12.175L10.8 9.65Q10.5 9.375 10.5 8.95Q10.5 8.525 10.8 8.225Q11.1 7.925 11.513 7.925Q11.925 7.925 12.225 8.225L15.3 11.3Q15.45 11.45 15.513 11.625Q15.575 11.8 15.575 12Q15.575 12.2 15.513 12.375Q15.45 12.55 15.3 12.7L12.2 15.8Q11.925 16.075 11.513 16.075Q11.1 16.075 10.8 15.775ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V16Q2 15.575 2.288 15.287Q2.575 15 3 15Q3.425 15 3.713 15.287Q4 15.575 4 16V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V8Q4 8.425 3.713 8.712Q3.425 9 3 9Q2.575 9 2.288 8.712Q2 8.425 2 8V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialInputRoundedFilled.displayName = 'AmauiIconMaterialInputRoundedFilled';

export default IconMaterialInputRoundedFilled;
