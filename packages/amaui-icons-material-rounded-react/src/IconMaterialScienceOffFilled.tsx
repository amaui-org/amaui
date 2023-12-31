import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOffFilled'

      short_name='ScienceOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-473 360-713v-47h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v287ZM764-84l-36-36H200q-51 0-72.5-45.5T138-250l208-252L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11Z"/>
    </Icon>
  );
});

IconMaterialScienceOffFilled.displayName = 'AmauiIconMaterialScienceOffFilled';

export default IconMaterialScienceOffFilled;
