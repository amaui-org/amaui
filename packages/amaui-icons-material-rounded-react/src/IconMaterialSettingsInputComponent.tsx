import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponent'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23q-.425 0-.712-.288Q3 22.425 3 22v-3.2q-.875-.3-1.438-1.062Q1 16.975 1 16V7q0-.425.288-.713Q1.575 6 2 6h1V2q0-.425.288-.713Q3.575 1 4 1t.713.287Q5 1.575 5 2v4h1q.425 0 .713.287Q7 6.575 7 7v9q0 .975-.562 1.738Q5.875 18.5 5 18.8v3.225q0 .425-.287.7Q4.425 23 4 23Zm8 0q-.425 0-.712-.288Q11 22.425 11 22v-3.2q-.875-.3-1.438-1.062Q9 16.975 9 16V7q0-.425.288-.713Q9.575 6 10 6h1V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v4h1q.425 0 .713.287Q15 6.575 15 7v9q0 .975-.562 1.738Q13.875 18.5 13 18.8v3.225q0 .425-.287.7Q12.425 23 12 23Zm8 0q-.425 0-.712-.288Q19 22.425 19 22v-3.2q-.875-.3-1.438-1.062Q17 16.975 17 16V7q0-.425.288-.713Q17.575 6 18 6h1V2q0-.425.288-.713Q19.575 1 20 1t.712.287Q21 1.575 21 2v4h1q.425 0 .712.287Q23 6.575 23 7v9q0 .975-.562 1.738Q21.875 18.5 21 18.8v3.225q0 .425-.288.7Q20.425 23 20 23ZM3 8v4h2V8Zm8 0v4h2V8Zm8 0v4h2V8ZM4 17q.425 0 .713-.288Q5 16.425 5 16v-2H3v2q0 .425.288.712Q3.575 17 4 17Zm8 0q.425 0 .713-.288Q13 16.425 13 16v-2h-2v2q0 .425.288.712.287.288.712.288Zm8 0q.425 0 .712-.288Q21 16.425 21 16v-2h-2v2q0 .425.288.712.287.288.712.288ZM4 13Zm8 0Zm8 0ZM3 12h2-2Zm8 0h2-2Zm8 0h2-2ZM4 14H3h2-1Zm8 0h-1 2-1Zm8 0h-1 2-1Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponent.displayName = 'AmauiIconMaterialSettingsInputComponent';

export default IconMaterialSettingsInputComponent;
