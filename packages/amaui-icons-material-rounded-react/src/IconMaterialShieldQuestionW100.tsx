import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldQuestionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldQuestionW100'

      short_name='ShieldQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Zm-1.932 175q8.932 0 15.432-6.568t6.5-15.5q0-8.932-6.568-15.432t-15.5-6.5q-8.932 0-15.432 6.568t-6.5 15.5q0 8.932 6.568 15.432t15.5 6.5ZM481-417q5.032 0 9.016-4t4.984-9q2-7 4.5-13t6.136-10.875Q512-462 518.5-469.5 525-477 532-484q17-18 30.5-38.687Q576-543.373 576-568q0-37-28.2-61.5T482-654q-28.279 0-52.14 13Q406-628 391-605q-3 5-1.071 10.296 1.928 5.297 7.071 7.704 5 2 10.5.5t9.5-6.5q11-16 27.784-24.5T482-626q26.4 0 46.2 16 19.8 16 19.8 42 0 19.931-11.735 36.931-11.736 17-26.265 31.069-9 8-16.5 17T479-463q-5 8-9 15t-4 16q0 6.29 4.25 10.645Q474.5-417 481-417Z"/>
    </Icon>
  );
});

IconMaterialShieldQuestionW100.displayName = 'AmauiIconMaterialShieldQuestionW100';

export default IconMaterialShieldQuestionW100;
