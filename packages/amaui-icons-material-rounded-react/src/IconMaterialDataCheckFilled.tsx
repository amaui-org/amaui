import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckFilled'

      short_name='DataCheck'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m612 449-43-43q-6-6-14-5.5t-14 6.5q-6 6-6 14t6 14l43 43q12 12 28 12t28-12l99-100q6-6 6-14t-6-14q-6-6-14-6t-14 6l-99 99ZM160 896q-17 0-28.5-11.5T120 856q0-17 11.5-28.5T160 816h400q17 0 28.5 11.5T600 856q0 17-11.5 28.5T560 896H160Zm480-280q-83 0-141.5-58.5T440 416q0-83 58.5-141.5T640 216q83 0 141.5 58.5T840 416q0 83-58.5 141.5T640 616Zm-480-40q-17 0-28.5-11.5T120 536q0-17 11.5-28.5T160 496h212q7 22 16 42t22 38H160Zm0 160q-17 0-28.5-11.5T120 696q0-17 11.5-28.5T160 656h336q23 14 49 23.5t55 13.5v3q0 17-11.5 28.5T560 736H160Z"/>
    </Icon>
  );
});

IconMaterialDataCheckFilled.displayName = 'AmauiIconMaterialDataCheckFilled';

export default IconMaterialDataCheckFilled;
