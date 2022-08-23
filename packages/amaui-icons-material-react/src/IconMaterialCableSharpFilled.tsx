import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCableSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableSharpFilled'
      short_name='Cable'

      {...props}
    >
      <path d="M4 21V19H3V14H5V7Q5 5.35 6.175 4.175Q7.35 3 9 3Q10.65 3 11.825 4.175Q13 5.35 13 7V17Q13 17.825 13.588 18.413Q14.175 19 15 19Q15.825 19 16.413 18.413Q17 17.825 17 17V10H15V5H16V3H20V5H21V10H19V17Q19 18.65 17.825 19.825Q16.65 21 15 21Q13.35 21 12.175 19.825Q11 18.65 11 17V7Q11 6.175 10.413 5.588Q9.825 5 9 5Q8.175 5 7.588 5.588Q7 6.175 7 7V14H9V19H8V21Z"/>
    </Icon>
  );
});

IconMaterialCableSharpFilled.displayName = 'AmauiIconMaterialCableSharpFilled';

export default IconMaterialCableSharpFilled;
