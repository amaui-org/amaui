import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarCrashW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarCrashW100Filled'

      short_name='CarCrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.5 10.2q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.087 2.625Q19.025 10.2 17.5 10.2ZM17.15 7h.7V4.3h-.7Zm.35 1.8q.175 0 .3-.125t.15-.3q0-.2-.125-.338Q17.7 7.9 17.5 7.9t-.325.125q-.125.125-.125.325t.125.325q.125.125.325.125ZM7.4 14.6q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.825 12.6 7.4 12.6t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-3.1 4.1v-7.5l2.075-5.9h5.05q-.05.175-.062.337-.013.163-.038.363H6.9l-1.6 4.5h7.45q.725.825 1.675 1.325.95.5 2.025.775-.35.05-.6.338-.25.287-.25.662 0 .425.288.712.287.288.712.288t.712-.288q.288-.287.288-.712 0-.325-.162-.563-.163-.237-.438-.362.7 0 1.375-.063.675-.062 1.325-.312v6.4H19v-2H5v2Z"/>
    </Icon>
  );
});

IconMaterialCarCrashW100Filled.displayName = 'AmauiIconMaterialCarCrashW100Filled';

export default IconMaterialCarCrashW100Filled;
