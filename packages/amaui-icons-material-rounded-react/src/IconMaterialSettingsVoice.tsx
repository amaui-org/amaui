import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVoice = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoice'

      short_name='SettingsVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 24q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Zm-4-10q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm0-6Zm0 13q-.425 0-.712-.288Q11 20.425 11 20v-2.1q-2.325-.3-3.95-1.925t-1.975-3.9q-.075-.425.225-.75T6.1 11q.35 0 .625.262.275.263.35.638.325 1.75 1.7 2.925Q10.15 16 12 16t3.225-1.175q1.375-1.175 1.7-2.925.075-.375.363-.638.287-.262.637-.262.475 0 .775.325.3.325.225.75-.35 2.275-1.975 3.9T13 17.9V20q0 .425-.287.712Q12.425 21 12 21Zm0-9q.425 0 .713-.288Q13 11.425 13 11V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5v6q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoice.displayName = 'AmauiIconMaterialSettingsVoice';

export default IconMaterialSettingsVoice;
