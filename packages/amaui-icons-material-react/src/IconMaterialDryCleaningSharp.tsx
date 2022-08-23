import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDryCleaningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningSharp'
      short_name='DryCleaning'

      {...props}
    >
      <path d="M7 22V16H3V12L11 8.45V7.8Q10.125 7.5 9.562 6.737Q9 5.975 9 5Q9 3.725 9.863 2.862Q10.725 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5H13Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5Q11 5.425 11.288 5.713Q11.575 6 12 6H13V8.45L21 12V16H17V22ZM9 15H15ZM5 14H7V13H17V14H19V13.3L12 10.2L5 13.3ZM9 20H15V15H9Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningSharp.displayName = 'AmauiIconMaterialDryCleaningSharp';

export default IconMaterialDryCleaningSharp;
