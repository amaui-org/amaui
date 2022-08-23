import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssuredWorkloadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssuredWorkloadSharp'
      short_name='AssuredWorkload'

      {...props}
    >
      <path d="M5 17V10H7V17ZM11 17V10H13V17ZM2 8V6L12 1L22 6V8ZM6.475 6H17.525L12 3.25ZM2 21V19H14.05Q14.1 19.525 14.175 20.012Q14.25 20.5 14.4 21ZM17 13.25V10H19V12.25ZM20 24Q18.275 23.575 17.138 22.012Q16 20.45 16 18.55V16L20 14L24 16V18.55Q24 20.45 22.863 22.012Q21.725 23.575 20 24ZM19.275 21 22.75 17.55 21.7 16.5 19.275 18.875 18.3 17.9 17.25 18.975ZM6.475 6H12H17.525Z"/>
    </Icon>
  );
});

IconMaterialAssuredWorkloadSharp.displayName = 'AmauiIconMaterialAssuredWorkloadSharp';

export default IconMaterialAssuredWorkloadSharp;
