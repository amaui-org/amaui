import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial24fpsSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='24fpsSelectW100'

      short_name='24fpsSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M164-106v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h28v148h-28Zm128 0v-148h248v148H548Zm122-346v-94H540v-202h28v174h102v-174h28v174h50v28h-50v94h-28Zm-430 0v-102q0-24.75 17.63-42.38Q275.25-614 300-614h60q14 0 23-9t9-23v-42q0-14-9-23t-23-9H240v-28h120q24.75 0 42.38 17.62Q420-712.75 420-688v42q0 24.75-17.62 42.37Q384.75-586 360-586h-60q-14 0-23 9t-9 23v74h140v28H240Z"/>
    </Icon>
  );
});

IconMaterial24fpsSelectW100.displayName = 'AmauiIconMaterial24fpsSelectW100';

export default IconMaterial24fpsSelectW100;
