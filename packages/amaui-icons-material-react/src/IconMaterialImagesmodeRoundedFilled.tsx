import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImagesmodeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesmodeRoundedFilled'
      short_name='Imagesmode'

      {...props}
    >
      <path d="M6 18 10 14 11.8 15.775 14 13 18 18ZM8 10Q7.175 10 6.588 9.412Q6 8.825 6 8Q6 7.175 6.588 6.588Q7.175 6 8 6Q8.825 6 9.413 6.588Q10 7.175 10 8Q10 8.825 9.413 9.412Q8.825 10 8 10ZM5 22Q3.75 22 2.875 21.125Q2 20.25 2 19V5Q2 3.75 2.875 2.875Q3.75 2 5 2H19Q20.25 2 21.125 2.875Q22 3.75 22 5V19Q22 20.25 21.125 21.125Q20.25 22 19 22ZM5 20H19Q19.425 20 19.712 19.712Q20 19.425 20 19V5Q20 4.575 19.712 4.287Q19.425 4 19 4H5Q4.575 4 4.287 4.287Q4 4.575 4 5V19Q4 19.425 4.287 19.712Q4.575 20 5 20Z"/>
    </Icon>
  );
});

IconMaterialImagesmodeRoundedFilled.displayName = 'AmauiIconMaterialImagesmodeRoundedFilled';

export default IconMaterialImagesmodeRoundedFilled;
