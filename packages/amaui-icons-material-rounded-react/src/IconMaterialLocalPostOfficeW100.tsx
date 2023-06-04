import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalPostOfficeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPostOfficeW100'

      short_name='LocalPostOffice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.7q-.275 0-.487-.213Q3.3 20.275 3.3 20v-6q0-.275.213-.488.212-.212.487-.212h3.3V8q0-1.95 1.375-3.325Q10.05 3.3 12 3.3h4q1.95 0 3.325 1.375Q20.7 6.05 20.7 8v12.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7h-5.3V20q0 .275-.212.487-.213.213-.488.213ZM14.7 17H20V8q0-1.65-1.175-2.825Q17.65 4 16 4h-4q-1.65 0-2.825 1.175Q8 6.35 8 8v5.3h6q.275 0 .488.212.212.213.212.488ZM11 9.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-2.4 7.275q.2.125.4.125t.4-.125L14 14H4ZM4 20h10v-5.2l-4.25 2.425q-.175.1-.362.15-.188.05-.388.05t-.387-.05q-.188-.05-.363-.15L4 14.8Zm0-6v.3-.013.613-.1V20v-5.2.1-.6q0-.1 0 0V14Z"/>
    </Icon>
  );
});

IconMaterialLocalPostOfficeW100.displayName = 'AmauiIconMaterialLocalPostOfficeW100';

export default IconMaterialLocalPostOfficeW100;
