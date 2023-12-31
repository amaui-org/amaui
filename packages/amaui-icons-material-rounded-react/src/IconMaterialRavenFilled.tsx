import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRavenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenFilled'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-760q-17 0-28.5 11.5T200-720q0 17 11.5 28.5T240-680q17 0 28.5-11.5T280-720q0-17-11.5-28.5T240-760Zm160 520-51 123q-6 15-21.5 21.5T297-95q-15-6-21.5-21.5T275-147l43-104q-106-28-172-114T80-560v-160q0-66 47-113t113-47q22 0 42 7.5t40 15.5l191 78q13 5 12.5 18.5T512-742l-112 42v60l314 200H400q-29 0-51-18t-27-46q-3-14-14-24t-26-10q-17 0-28.5 11.5T242-498q0 20 12 44.5t25 38.5q22 26 53.5 40.5T400-360h440l31 157q3 17-7.5 30T836-160h-14q-11 0-19-5.5T790-180l-30-60H560v120q0 17-11.5 28.5T520-80q-17 0-28.5-11.5T480-120v-120h-80Z"/>
    </Icon>
  );
});

IconMaterialRavenFilled.displayName = 'AmauiIconMaterialRavenFilled';

export default IconMaterialRavenFilled;
