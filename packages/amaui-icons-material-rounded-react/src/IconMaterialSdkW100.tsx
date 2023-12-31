import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdkW100'

      short_name='Sdk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-25 0-42.5-17.5T172-232v-442q0-5 .5-9t3.5-7l54-64q3-4 7-6t9-2h468q5 0 9 2t7 6l54 64q3 3 3.5 7t.5 9v442q0 25-17.5 42.5T728-172H232Zm-16-522h528l-34-40H250l-34 40Zm16 494h496q14 0 23-9t9-23v-434H200v434q0 14 9 23t23 9Zm414-220-74 74q-4 4-4.5 9.5T572-326q5 5 10 5t10-5l73-73q9-9 9-21t-9-21l-73-73q-4-4-9.5-4.5T572-514q-5 5-5 10t5 10l74 74Zm-330 0 74-74q4-4 4.5-9.5T390-514q-5-5-10-5t-10 5l-73 73q-9 9-9 21t9 21l73 73q4 4 9.5 4.5T390-326q5-5 5-10t-5-10l-74-74ZM200-200v-466 466Z"/>
    </Icon>
  );
});

IconMaterialSdkW100.displayName = 'AmauiIconMaterialSdkW100';

export default IconMaterialSdkW100;
