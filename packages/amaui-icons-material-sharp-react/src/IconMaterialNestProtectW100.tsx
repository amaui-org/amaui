import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestProtectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestProtectW100'

      short_name='NestProtect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352.172-192Q285-192 238.5-238.381T192-351.934v-255.894Q192-675 238.381-721.5T351.934-768h255.894Q675-768 721.5-721.619T768-608.066v255.894Q768-285 721.619-238.5T608.066-192H352.172ZM352-256h256q40 0 68-28t28-68v-256q0-40-28-68t-68-28H352q-40 0-68 28t-28 68v256q0 40 28 68t68 28Zm128.141-64Q413-320 366.5-366.359t-46.5-113.5Q320-547 366.359-593.5t113.5-46.5Q547-640 593.5-593.641t46.5 113.5Q640-413 593.641-366.5t-113.5 46.5ZM480-384q40 0 68-28t28-68q0-40-28-68t-68-28q-40 0-68 28t-28 68q0 40 28 68t68 28Z"/>
    </Icon>
  );
});

IconMaterialNestProtectW100.displayName = 'AmauiIconMaterialNestProtectW100';

export default IconMaterialNestProtectW100;
