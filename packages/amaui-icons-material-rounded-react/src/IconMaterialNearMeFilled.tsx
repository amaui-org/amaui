import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeFilled'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.05 13.95-6.4-2.6q-.275-.125-.462-.375Q3 10.725 3 10.4q0-.325.175-.575.175-.25.475-.375l15.3-5.675q.3-.125.575-.05Q19.8 3.8 20 4q.2.2.275.475.075.275-.05.575l-5.675 15.3q-.125.325-.387.487-.263.163-.538.163t-.55-.163q-.275-.162-.425-.487Z"/>
    </Icon>
  );
});

IconMaterialNearMeFilled.displayName = 'AmauiIconMaterialNearMeFilled';

export default IconMaterialNearMeFilled;
