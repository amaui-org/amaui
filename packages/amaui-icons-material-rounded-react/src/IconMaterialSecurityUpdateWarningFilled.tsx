import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningFilled'

      short_name='SecurityUpdateWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q-.425 0-.712-.288Q11 12.425 11 12V8q0-.425.288-.713Q11.575 7 12 7t.713.287Q13 7.575 13 8v4q0 .425-.287.712Q12.425 13 12 13Zm0 4q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16t-.287.712Q12.425 17 12 17Zm-5 6q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningFilled.displayName = 'AmauiIconMaterialSecurityUpdateWarningFilled';

export default IconMaterialSecurityUpdateWarningFilled;
