import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPhoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPhoneFilled'

      short_name='SettingsPhone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm4 0q-.425 0-.712-.288Q15 10.425 15 10t.288-.713Q15.575 9 16 9t.712.287Q17 9.575 17 10t-.288.712Q16.425 11 16 11Zm4 0q-.425 0-.712-.288Q19 10.425 19 10t.288-.713Q19.575 9 20 9t.712.287Q21 9.575 21 10t-.288.712Q20.425 11 20 11Zm-.05 10q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L7 10.9q1.05 1.8 2.625 3.375T13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsPhoneFilled.displayName = 'AmauiIconMaterialSettingsPhoneFilled';

export default IconMaterialSettingsPhoneFilled;
