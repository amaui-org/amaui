import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentPasteOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteOffSharpFilled'
      short_name='ContentPasteOff'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21H3V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L1.375 4.225L2.8 2.8L21.2 21.2ZM5 19H16.15L5 7.85V19Q5 19 5 19Q5 19 5 19ZM21 18.15 19 16.15V5Q19 5 19 5Q19 5 19 5H17V8H10.85L5.85 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.725 1.55Q14.5 2.1 14.8 3H21ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteOffSharpFilled.displayName = 'AmauiIconMaterialContentPasteOffSharpFilled';

export default IconMaterialContentPasteOffSharpFilled;
