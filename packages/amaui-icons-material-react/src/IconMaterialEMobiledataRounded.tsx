import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEMobiledataRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataRounded'
      short_name='EMobiledata'

      {...props}
    >
      <path d="M9 17Q8.575 17 8.288 16.712Q8 16.425 8 16V8Q8 7.575 8.288 7.287Q8.575 7 9 7H15Q15.425 7 15.713 7.287Q16 7.575 16 8Q16 8.425 15.713 8.712Q15.425 9 15 9H10V11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13H10V15H15Q15.425 15 15.713 15.287Q16 15.575 16 16Q16 16.425 15.713 16.712Q15.425 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataRounded.displayName = 'AmauiIconMaterialEMobiledataRounded';

export default IconMaterialEMobiledataRounded;
