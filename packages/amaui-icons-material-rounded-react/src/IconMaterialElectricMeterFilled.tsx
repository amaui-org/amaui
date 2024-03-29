import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMeterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMeterFilled'

      short_name='ElectricMeter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 19.95q-.25 0-.487-.012-.238-.013-.488-.038v1.05q0 .425-.287.713-.288.287-.713.287t-.712-.287Q9 21.375 9 20.95v-1.5q-2.65-.925-4.325-3.238Q3 13.9 3 10.95q0-1.875.712-3.512.713-1.638 1.926-2.85 1.212-1.213 2.85-1.926 1.637-.712 3.487-.712t3.5.712q1.65.713 2.875 1.926 1.225 1.212 1.938 2.85Q21 9.075 21 10.95q0 2.95-1.688 5.238-1.687 2.287-4.312 3.237v1.525q0 .425-.287.713-.288.287-.713.287t-.712-.287Q13 21.375 13 20.95V19.9q-.25.05-.5.05h-.525ZM15 9q.425 0 .713-.288Q16 8.425 16 8t-.287-.713Q15.425 7 15 7H9q-.425 0-.712.287Q8 7.575 8 8t.288.712Q8.575 9 9 9Zm-2 3.75.5-.5q.15-.15.238-.35.087-.2.087-.4t-.087-.4q-.088-.2-.238-.35-.325-.325-.75-.325t-.75.325l-1.55 1.55q-.3.3-.3.7 0 .4.3.7l.55.55-.5.5q-.15.15-.237.35-.088.2-.088.4t.088.4q.087.2.237.35.325.325.75.325t.75-.325l1.55-1.55q.3-.3.3-.7 0-.4-.3-.7Z"/>
    </Icon>
  );
});

IconMaterialElectricMeterFilled.displayName = 'AmauiIconMaterialElectricMeterFilled';

export default IconMaterialElectricMeterFilled;
