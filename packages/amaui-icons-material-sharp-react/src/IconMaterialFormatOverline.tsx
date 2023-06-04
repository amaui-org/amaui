import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatOverline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverline'

      short_name='FormatOverline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 5V3h14v2Zm7 16q-2.925 0-4.962-2.038Q5 16.925 5 14t2.038-4.963Q9.075 7 12 7t4.962 2.037Q19 11.075 19 14q0 2.925-2.038 4.962Q14.925 21 12 21Zm0-2.5q1.875 0 3.188-1.312Q16.5 15.875 16.5 14q0-1.875-1.312-3.188Q13.875 9.5 12 9.5q-1.875 0-3.188 1.312Q7.5 12.125 7.5 14q0 1.875 1.312 3.188Q10.125 18.5 12 18.5Z"/>
    </Icon>
  );
});

IconMaterialFormatOverline.displayName = 'AmauiIconMaterialFormatOverline';

export default IconMaterialFormatOverline;
