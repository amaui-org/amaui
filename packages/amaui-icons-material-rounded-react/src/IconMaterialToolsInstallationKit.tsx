import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsInstallationKit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsInstallationKit'

      short_name='ToolsInstallationKit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20q-3.35 0-5.675-2.325Q1 15.35 1 12q0-3.35 2.325-5.675Q5.65 4 9 4h6q3.35 0 5.675 2.325Q23 8.65 23 12q0 3.35-2.325 5.675Q18.35 20 15 20Zm0-2h6q2.5 0 4.25-1.75T21 12q0-2.5-1.75-4.25T15 6H9Q6.5 6 4.75 7.75T3 12q0 2.5 1.75 4.25T9 18Zm3-4q.825 0 1.413-.588Q14 12.825 14 12t-.587-1.413Q12.825 10 12 10q-.825 0-1.412.587Q10 11.175 10 12q0 .825.588 1.412Q11.175 14 12 14Zm-1-5h2q.425 0 .713-.288Q14 8.425 14 8t-.287-.713Q13.425 7 13 7h-2q-.425 0-.712.287Q10 7.575 10 8t.288.712Q10.575 9 11 9Zm0 8h2q.425 0 .713-.288Q14 16.425 14 16t-.287-.713Q13.425 15 13 15h-2q-.425 0-.712.287Q10 15.575 10 16t.288.712Q10.575 17 11 17Zm5-3q.425 0 .712-.288Q17 13.425 17 13v-2q0-.425-.288-.713Q16.425 10 16 10t-.712.287Q15 10.575 15 11v2q0 .425.288.712.287.288.712.288Zm-8 0q.425 0 .713-.288Q9 13.425 9 13v-2q0-.425-.287-.713Q8.425 10 8 10t-.713.287Q7 10.575 7 11v2q0 .425.287.712Q7.575 14 8 14Zm4-2Z"/>
    </Icon>
  );
});

IconMaterialToolsInstallationKit.displayName = 'AmauiIconMaterialToolsInstallationKit';

export default IconMaterialToolsInstallationKit;
