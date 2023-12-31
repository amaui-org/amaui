import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeartW100Filled'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-360q6 0 11.5-2t10.5-7l90-91q14-14 18-33.5t-4-37.5q-8-18-24-29.5T547-572q-20 0-36 12t-30 26q-14-14-29.5-26T416-572q-20 0-36 11t-24 29q-8 19-4.5 38.5T369-460l91 91q5 5 10 7t11 2Zm-39 228q-11 0-19-7.5T413-158l-11-86q-21-6-46.5-20T313-294l-78 34q-11 5-21.5 1T197-273l-38-66q-5-10-3-21t11-18l68-51q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-68-51q-9-7-11.5-18t3.5-21l38-64q6-10 16-14t21 1l78 33q20-17 43.5-30.5T401-716l12-86q2-11 10-18.5t19-7.5h75q11 0 19.5 7.5T547-802l11 87q26 9 45.5 20.5T644-665l82-33q11-5 21-1.5t16 13.5l38 65q6 10 3.5 21T793-582l-72 54q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l70 52q9 7 11.5 18t-3.5 21l-38 66q-6 10-16.5 13.5T723-261l-79-34q-21 18-42 30.5T558-245l-11 87q-2 11-10.5 18.5T517-132h-75Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartW100Filled.displayName = 'AmauiIconMaterialSettingsHeartW100Filled';

export default IconMaterialSettingsHeartW100Filled;
