import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bungalow'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-.425 0-.713-.288Q7 20.425 7 20v-5.2l-.575.925q-.225.35-.625.438-.4.087-.75-.138T4.6 15.4q-.1-.4.125-.75l6.425-10.3q.15-.25.375-.35.225-.1.475-.1.25 0 .475.1.225.1.375.35l6.425 10.3q.225.35.125.75t-.45.625q-.35.225-.75.125t-.625-.45L17 14.8V20q0 .425-.288.712Q16.425 21 16 21Zm1-2h2v-2q0-.425.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17v2h2v-7.4l-3-4.8-3 4.8Zm3-5q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-3 5h6-6Z"/>
    </Icon>
  );
});

IconMaterialBungalow.displayName = 'AmauiIconMaterialBungalow';

export default IconMaterialBungalow;
