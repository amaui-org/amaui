import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherAdmissionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherAdmissionW100Filled'

      short_name='OtherAdmission'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 18.8h1.3v-1.3h-1.3Zm2 0h1.3v-1.3h-1.3Zm2 0h1.3v-1.3h-1.3ZM18 21.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM7.65 8.65h8.7v-.7h-8.7Zm3.825 11.05H4.3V4.3h15.4v7.225q-.425-.1-.85-.163-.425-.062-.85-.062-.575 0-1.125.1t-1.075.275v-.025H7.65v.7h6.725q-.85.55-1.488 1.312-.637.763-1.037 1.688h-4.2v.7h3.925q-.125.475-.2.962-.075.488-.075.988 0 .35.025.85t.15.85Z"/>
    </Icon>
  );
});

IconMaterialOtherAdmissionW100Filled.displayName = 'AmauiIconMaterialOtherAdmissionW100Filled';

export default IconMaterialOtherAdmissionW100Filled;
