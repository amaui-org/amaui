import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCottageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageSharpFilled'
      short_name='Cottage'

      {...props}
    >
      <path d="M4 21V11.625L2.2 13L1 11.4L4 9.1V6H6V7.575L12 3L23 11.4L21.8 12.975L20 11.625V21H13V15H11V21ZM4 5Q4 3.75 4.875 2.875Q5.75 2 7 2Q7.425 2 7.713 1.712Q8 1.425 8 1H10Q10 2.25 9.125 3.125Q8.25 4 7 4Q6.575 4 6.287 4.287Q6 4.575 6 5Z"/>
    </Icon>
  );
});

IconMaterialCottageSharpFilled.displayName = 'AmauiIconMaterialCottageSharpFilled';

export default IconMaterialCottageSharpFilled;
