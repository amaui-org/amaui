import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowFilled'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.425 0 .713-.288Q13 13.425 13 13t-.287-.713Q12.425 12 12 12t-.712.287Q11 12.575 11 13t.288.712Q11.575 14 12 14Zm-4 7q-.425 0-.713-.288Q7 20.425 7 20v-5.2l-.575.925q-.225.35-.625.438-.4.087-.75-.138T4.6 15.4q-.1-.4.125-.75l6.425-10.3q.15-.25.375-.35.225-.1.475-.1.25 0 .475.1.225.1.375.35l6.425 10.3q.225.35.125.75t-.45.625q-.35.225-.75.125t-.625-.45L17 14.8V20q0 .425-.288.712Q16.425 21 16 21h-3v-4q0-.425-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17v4Z"/>
    </Icon>
  );
});

IconMaterialBungalowFilled.displayName = 'AmauiIconMaterialBungalowFilled';

export default IconMaterialBungalowFilled;
