import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsVoiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsVoiceFilled'

      short_name='SettingsVoice'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 24q-.425 0-.713-.288Q7 23.425 7 23t.287-.712Q7.575 22 8 22t.713.288Q9 22.575 9 23t-.287.712Q8.425 24 8 24Zm4 0q-.425 0-.712-.288Q11 23.425 11 23t.288-.712Q11.575 22 12 22t.713.288Q13 22.575 13 23t-.287.712Q12.425 24 12 24Zm4 0q-.425 0-.712-.288Q15 23.425 15 23t.288-.712Q15.575 22 16 22t.712.288Q17 22.575 17 23t-.288.712Q16.425 24 16 24Zm-4-10q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14Zm-1 7v-3.1q-2.6-.35-4.3-2.312Q5 13.625 5 11h2q0 2.075 1.463 3.537Q9.925 16 12 16t3.538-1.463Q17 13.075 17 11h2q0 2.625-1.7 4.588Q15.6 17.55 13 17.9V21Z"/>
    </Icon>
  );
});

IconMaterialSettingsVoiceFilled.displayName = 'AmauiIconMaterialSettingsVoiceFilled';

export default IconMaterialSettingsVoiceFilled;
