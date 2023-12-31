import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRavenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RavenW100'

      short_name='Raven'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m328-132-26-11 59-141q-100-16-164.5-92.5T132-554.301V-703q0-51.562 36.719-88.281Q205.438-828 257-828q13.484 0 25.742 2.5Q295-823 307-818l183 77-108 42v83l429 293 18 111h-41l-27-68H529v148h-28v-148H390l-62 148Zm77-176h379l-124-84H395q-58.575 0-100.288-41.712Q253-475.425 253-534h28q0 48 33 81t81 33h224L354-600v-103q0-41-28-69t-69-28q-41 0-69 28t-28 69v149q0 102.5 71.458 174.25Q302.917-308 405-308ZM257.035-677Q246-677 238.5-684.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5ZM395-392Z"/>
    </Icon>
  );
});

IconMaterialRavenW100.displayName = 'AmauiIconMaterialRavenW100';

export default IconMaterialRavenW100;
