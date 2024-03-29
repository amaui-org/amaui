import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPower = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPower'

      short_name='SettingsPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-.425 0-.712-.288Q11 11.425 11 11V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v8q0 .425-.287.712Q12.425 12 12 12Zm0 7q-3.35 0-5.675-2.325Q4 14.35 4 11q0-1.7.7-3.238.7-1.537 2.025-2.737Q7 4.75 7.4 4.8q.4.05.675.325.3.3.3.713 0 .412-.325.687-.95.85-1.5 2T6 11q0 2.5 1.75 4.25T12 17q2.5 0 4.25-1.75T18 11q0-1.325-.55-2.475-.55-1.15-1.5-2-.325-.275-.35-.687-.025-.413.275-.713.275-.275.675-.35.4-.075.675.2 1.35 1.25 2.063 2.787Q20 9.3 20 11q0 3.35-2.325 5.675Q15.35 19 12 19Zm-4 5q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPower.displayName = 'AmauiIconMaterialSettingsPower';

export default IconMaterialSettingsPower;
