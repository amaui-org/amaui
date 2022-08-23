import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHMobiledataRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataRoundedFilled'
      short_name='HMobiledata'

      {...props}
    >
      <path d="M8 17Q7.575 17 7.287 16.712Q7 16.425 7 16V8Q7 7.575 7.287 7.287Q7.575 7 8 7Q8.425 7 8.713 7.287Q9 7.575 9 8V11H15V8Q15 7.575 15.288 7.287Q15.575 7 16 7Q16.425 7 16.712 7.287Q17 7.575 17 8V16Q17 16.425 16.712 16.712Q16.425 17 16 17Q15.575 17 15.288 16.712Q15 16.425 15 16V13H9V16Q9 16.425 8.713 16.712Q8.425 17 8 17Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataRoundedFilled.displayName = 'AmauiIconMaterialHMobiledataRoundedFilled';

export default IconMaterialHMobiledataRoundedFilled;
