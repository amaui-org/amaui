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
      <path d="M11 13V7h2v6Zm1 4q-.425 0-.712-.288Q11 16.425 11 16t.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16t-.287.712Q12.425 17 12 17Zm-7 6V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningFilled.displayName = 'AmauiIconMaterialSecurityUpdateWarningFilled';

export default IconMaterialSecurityUpdateWarningFilled;
