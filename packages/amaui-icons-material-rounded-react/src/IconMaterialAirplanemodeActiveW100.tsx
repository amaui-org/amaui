import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirplanemodeActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeActiveW100'

      short_name='AirplanemodeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 21.15v-.65l2-1.45v-6.4l-8.5 2.5v-.8l8.5-5V3.5q0-.375.237-.613.238-.237.613-.237t.613.237q.237.238.237.613v5.85l8.5 5v.8l-8.5-2.5V19l2 1.5v.65L12 20.3Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeActiveW100.displayName = 'AmauiIconMaterialAirplanemodeActiveW100';

export default IconMaterialAirplanemodeActiveW100;
