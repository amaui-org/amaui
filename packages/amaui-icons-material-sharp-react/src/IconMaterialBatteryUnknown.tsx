import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryUnknown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknown'

      short_name='BatteryUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22V4h3V2h4v2h3v18Zm5-4q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q12.425 15.9 12 15.9t-.737.312q-.313.313-.313.738t.313.738Q11.575 18 12 18Zm-.75-3.2h1.5q0-.825.325-1.3.325-.475.725-.863.4-.387.725-.812.325-.425.325-1.125 0-1.275-.788-1.988Q13.275 8 12 8q-1.125 0-1.85.613-.725.612-1 1.487l1.35.55q.15-.425.488-.813.337-.387 1.012-.387.725 0 1.038.375.312.375.312.825 0 .575-.325.887-.325.313-.725.675-.4.363-.725.925-.325.563-.325 1.663Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknown.displayName = 'AmauiIconMaterialBatteryUnknown';

export default IconMaterialBatteryUnknown;
