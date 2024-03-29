import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLogin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Login'

      short_name='Login'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.325 16.275q-.275-.325-.275-.738 0-.412.275-.687l1.85-1.85H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h7.175l-1.85-1.85q-.3-.3-.3-.712 0-.413.3-.713.275-.3.688-.3.412 0 .687.275l3.6 3.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-3.6 3.6q-.3.3-.7.275-.4-.025-.675-.3ZM13 21q-.425 0-.712-.288Q12 20.425 12 20t.288-.712Q12.575 19 13 19h6V5h-6q-.425 0-.712-.288Q12 4.425 12 4t.288-.713Q12.575 3 13 3h6q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLogin.displayName = 'AmauiIconMaterialLogin';

export default IconMaterialLogin;
