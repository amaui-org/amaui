import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHomeW100'

      short_name='FamilyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-304q5 0 10-1.5t9-5.5q22-20 41.5-39t34.5-37q15-18 24-35.5t9-33.5q0-30-20.5-50T538-526q-18 0-32.5 7.5T480-500q-9-11-24-18.5t-32-7.5q-29 0-49.5 20T354-456q0 16 8.5 33.5T386-387q15 18 34.5 37t40.5 39q4 4 9 5.5t10 1.5ZM272-172q-25 0-42.5-17.5T212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8-6 17.5-9t19.5-3q10 0 19 3t17 9l317 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-68-53v303q0 25-17.5 42.5T688-172H272Zm0-28h416q14 0 23-9t9-23v-324L499-724q-8-7-19-7t-19 7L240-556v324q0 14 9 23t23 9Zm0 0h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialFamilyHomeW100.displayName = 'AmauiIconMaterialFamilyHomeW100';

export default IconMaterialFamilyHomeW100;
