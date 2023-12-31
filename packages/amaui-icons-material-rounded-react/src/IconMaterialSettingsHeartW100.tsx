import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsHeartW100'

      short_name='SettingsHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M481-360q6 0 11.5-2t10.5-7l90-91q14-14 18-33.5t-4-37.5q-8-18-24-29.5T547-572q-20 0-36 12t-30 26q-14-14-29.5-26T416-572q-20 0-36 11t-24 29q-8 19-4.5 38.5T369-460l91 91q5 5 10 7t11 2Zm-39 228q-11 0-19-7.5T413-158l-11-86q-21-6-46.5-20T313-294l-78 34q-11 5-21.5 1T197-273l-38-66q-5-10-3-21t11-18l68-51q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-68-51q-9-7-11.5-18t3.5-21l38-64q6-10 16-14t21 1l78 33q20-17 43.5-30.5T401-716l12-86q2-11 10-18.5t19-7.5h75q11 0 19.5 7.5T547-802l11 87q26 9 45.5 20.5T644-665l82-33q11-5 21-1.5t16 13.5l38 65q6 10 3.5 21T793-582l-72 54q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l70 52q9 7 11.5 18t-3.5 21l-38 66q-6 10-16.5 13.5T723-261l-79-34q-21 18-42 30.5T558-245l-11 87q-2 11-10.5 18.5T517-132h-75Zm-2-28h78l15-109q30-8 53.5-21.5T636-329l100 43 40-68-88-66q5-18 6.5-32t1.5-28q0-15-1.5-28t-6.5-30l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 49 38t57 22l13 108Zm40-320Z"/>
    </Icon>
  );
});

IconMaterialSettingsHeartW100.displayName = 'AmauiIconMaterialSettingsHeartW100';

export default IconMaterialSettingsHeartW100;
