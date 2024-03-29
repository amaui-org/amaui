import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinInvokeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinInvokeFilled'

      short_name='PinInvoke'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.35 15.65q-.275-.3-.275-.712 0-.413.275-.688L11.6 12h-1.25q-.425 0-.713-.288-.287-.287-.287-.712t.287-.713Q9.925 10 10.35 10H14q.425 0 .713.287.287.288.287.713v3.65q0 .425-.287.713-.288.287-.713.287t-.712-.287Q13 15.075 13 14.65v-1.225l-2.25 2.25q-.15.15-.325.225-.175.075-.363.062-.187-.012-.374-.087-.188-.075-.338-.225ZM19 10q-1.25 0-2.125-.875T16 7q0-1.25.875-2.125T19 4q1.25 0 2.125.875T22 7q0 1.25-.875 2.125T19 10ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h10v2H4v12h16v-6h2v6q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialPinInvokeFilled.displayName = 'AmauiIconMaterialPinInvokeFilled';

export default IconMaterialPinInvokeFilled;
