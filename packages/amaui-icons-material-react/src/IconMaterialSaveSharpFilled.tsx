import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveSharpFilled'
      short_name='Save'

      {...props}
    >
      <path d="M3 21V3H17L21 7V21ZM12 18Q13.25 18 14.125 17.125Q15 16.25 15 15Q15 13.75 14.125 12.875Q13.25 12 12 12Q10.75 12 9.875 12.875Q9 13.75 9 15Q9 16.25 9.875 17.125Q10.75 18 12 18ZM6 10H15V6H6Z"/>
    </Icon>
  );
});

IconMaterialSaveSharpFilled.displayName = 'AmauiIconMaterialSaveSharpFilled';

export default IconMaterialSaveSharpFilled;
