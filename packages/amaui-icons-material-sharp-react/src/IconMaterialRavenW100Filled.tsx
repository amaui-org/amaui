import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRavenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100Filled'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m390-280-62 148-26-11 59-141q-100-16-164.5-92.5T132-554.301V-703q0-51.562 36.719-88.281Q205.438-828 257-828q13.484 0 25.742 2.5Q295-823 307-818l183 77-108 42v83l287 196H395q-48 0-81-33t-33-81h-28q0 58.575 41.712 100.288Q336.425-392 395-392h315l101 69 18 111h-41l-27-68H529v148h-28v-148H390ZM257.035-729Q246-729 238.5-721.535t-7.5 18.5q0 11.035 7.465 18.535t18.5 7.5q11.035 0 18.535-7.465t7.5-18.5q0-11.035-7.465-18.535t-18.5-7.5Z"/>
    </Icon>
  );
});

IconMaterialRavenW100Filled.displayName = 'AmauiIconMaterialRavenW100Filled';

export default IconMaterialRavenW100Filled;
