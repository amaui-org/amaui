import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeDisabledW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeDisabledW100'

      short_name='NearMeDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 18.85-2.3-5.8-5.8-2.35-.05-.4 5.15-1.95-5.625-5.625.5-.5 16.7 16.7-.5.5-5.7-5.7L13.6 18.85Zm3.45-7.875-.55-.525 1.65-4.25-4.275 1.625-.525-.525 6-2.3ZM13.4 17.4l1.625-4.225-4.3-4.3L6.5 10.5l4.9 2Zm1.4-8.25Zm-1.925 1.875Z"/>
    </Icon>
  );
});

IconMaterialNearMeDisabledW100.displayName = 'AmauiIconMaterialNearMeDisabledW100';

export default IconMaterialNearMeDisabledW100;
