import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentPasteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteSharpW100Filled'
      short_name='ContentPaste'

      {...props}
    >
      <path d="M4.3 19.7V4.3H10.35Q10.2 3.525 10.7 2.912Q11.2 2.3 12 2.3Q12.8 2.3 13.312 2.912Q13.825 3.525 13.65 4.3H19.7V19.7ZM5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H15.7V7H8.3V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialContentPasteSharpW100Filled.displayName = 'AmauiIconMaterialContentPasteSharpW100Filled';

export default IconMaterialContentPasteSharpW100Filled;
