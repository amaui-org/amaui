import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileCopyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyOffFilled'

      short_name='FileCopyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M772-302 252-822q-6-6-9-13.5t-3-15.5q0-29 20-49t49-20h258q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v316q0 27-24.5 37.5T772-302Zm76 246q-11 11-28 11t-28-11L648-200H320q-33 0-56.5-23.5T240-280v-328L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28ZM620-640h160L560-860l220 220-220-220v160q0 25 17.5 42.5T620-640ZM160-40q-33 0-56.5-23.5T80-120v-480q0-17 11.5-28.5T120-640q17 0 28.5 11.5T160-600v480h440q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H160Z"/>
    </Icon>
  );
});

IconMaterialFileCopyOffFilled.displayName = 'AmauiIconMaterialFileCopyOffFilled';

export default IconMaterialFileCopyOffFilled;
