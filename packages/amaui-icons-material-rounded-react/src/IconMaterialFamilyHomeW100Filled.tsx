import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHomeW100Filled'

      short_name='FamilyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-304q5 0 10-1.5t9.105-5.029Q521-331 540.5-350q19.5-19 34.457-37.209 14.956-18.21 24-35.407Q608-439.814 608-456q0-30.196-20.625-50.098Q566.75-526 537.875-526 520-526 505.5-518.5T480-500q-9-11-24-18.5t-31.571-7.5q-29 0-49.715 19.794Q354-486.413 354-456.381q0 16.381 8.5 33.881T386-387q15 18 34.333 37.106Q439.667-330.788 461-311q4 4 9 5.5t10 1.5ZM272-172q-24.75 0-42.375-17.625T212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8.339-6 17.815-9 9.475-3 19.33-3 9.855 0 18.883 3 9.028 3 16.972 9l317 243q5 4 5.5 9t-3.5 10.185Q831-480 826-479t-10-3l-68-53v303q0 24.75-17.625 42.375T688-172H272Z"/>
    </Icon>
  );
});

IconMaterialFamilyHomeW100Filled.displayName = 'AmauiIconMaterialFamilyHomeW100Filled';

export default IconMaterialFamilyHomeW100Filled;
