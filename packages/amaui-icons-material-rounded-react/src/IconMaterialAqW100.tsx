import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqW100'

      short_name='Aq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-303q-66 0-111.5-45.5T477-460q0-66 45.5-111.5T633-617q65 0 110 46t45 111q0 36-15 67.5T730-338l16 24q3 5 2 10.5t-6 8.5q-5 4-11 2.5t-9-6.5l-15-23q-17 9-35 14t-38 5Zm-402-81-24 64q-2 5-5.5 7.5T194-310q-8 0-12.5-6.5T180-331l104-269q2-5 6-7.5t9-2.5h12q5 0 8.5 2.5t5.5 7.5l106 270q3 8-1.5 14t-12.5 6q-5 0-8-2.5t-5-7.5l-25-64H232Zm401 53q15 0 29.5-3.5T691-346l-29-43q-3-5-2-10.5t6-8.5q5-3 11-2t9 6l28 42q21-19 32.5-44t11.5-54q0-53-36-91t-89-38q-53 0-89.5 37.5T507-460q0 54 36.5 91.5T633-331Zm-391-78h128l-63-163h-4l-61 163Z"/>
    </Icon>
  );
});

IconMaterialAqW100.displayName = 'AmauiIconMaterialAqW100';

export default IconMaterialAqW100;
