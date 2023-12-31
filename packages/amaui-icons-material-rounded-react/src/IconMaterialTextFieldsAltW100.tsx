import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextFieldsAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsAltW100'

      short_name='TextFieldsAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-200h760q8.5 0 14.25 5.75T880-180q0 8.5-5.75 14.25T860-160H100q-8.5 0-14.25-5.75T80-180q0-8.5 5.75-14.25T100-200Zm660-94v-480q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q780-788 784-784.033q4 3.966 4 10.033v480q0 6.067-3.953 10.033-3.954 3.967-10 3.967Q768-280 764-283.967q-4-3.966-4-10.033ZM289-425l-57 137q-2 4-5 6t-7.919 2Q211-280 207-286t-1-13l202-483q1-2 3.211-4 2.21-2 4.789-2h7.765q3.235 0 5.235 2 2 2 3 4l201 480q3 8-1.86 15T618-280q-4.558 0-8.465-2.667-3.907-2.666-5.535-7.333l-56-135H289Zm11-27h237L419-736 300-452Z"/>
    </Icon>
  );
});

IconMaterialTextFieldsAltW100.displayName = 'AmauiIconMaterialTextFieldsAltW100';

export default IconMaterialTextFieldsAltW100;
