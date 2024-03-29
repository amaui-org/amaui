import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInputCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputCircleFilled'

      short_name='InputCircle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 569v367q0 17 11.5 28.5T480 976q17 0 28.5-11.5T520 936V569l76 75q11 11 27.5 11.5T652 644q11-11 11-28t-11-28L508 444q-12-12-28-12t-28 12L308 588q-11 11-11.5 27.5T308 644q11 11 28 11t28-11l76-75Zm40-313q-134 0-227 93t-93 227q0 33 6.5 65t19.5 62q7 17 4.5 34T175 767q-12 12-29.5 5.5T119 747q-19-41-29-83.5T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 45-9.5 88.5T841 749q-9 18-26.5 24t-29.5-6q-12-12-15.5-29t3.5-33q14-31 20.5-63.5T800 576q0-134-93-227t-227-93Z"/>
    </Icon>
  );
});

IconMaterialInputCircleFilled.displayName = 'AmauiIconMaterialInputCircleFilled';

export default IconMaterialInputCircleFilled;
