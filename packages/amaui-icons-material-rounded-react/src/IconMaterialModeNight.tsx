import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeNight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNight'

      short_name='ModeNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 4h-.525q-.25 0-.475.05 1.425 1.65 2.213 3.687Q11.5 9.775 11.5 12t-.787 4.262Q9.925 18.3 8.5 19.95q.225.05.475.05H9.5q3.325 0 5.663-2.337Q17.5 15.325 17.5 12t-2.337-5.663Q12.825 4 9.5 4Zm10 8q0 2.075-.788 3.9-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q11.575 22 9.5 22q-.8 0-1.675-.15t-1.675-.425q-.3-.125-.475-.387-.175-.263-.175-.588 0-.225.088-.425.087-.2.262-.325 1.775-1.475 2.712-3.488Q9.5 14.2 9.5 12q0-2.2-.938-4.213Q7.625 5.775 5.85 4.3q-.175-.125-.262-.325-.088-.2-.088-.425 0-.325.175-.588.175-.262.475-.387.8-.275 1.675-.425Q8.7 2 9.5 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175.788 1.825.788 3.9Zm-8 0Z"/>
    </Icon>
  );
});

IconMaterialModeNight.displayName = 'AmauiIconMaterialModeNight';

export default IconMaterialModeNight;
