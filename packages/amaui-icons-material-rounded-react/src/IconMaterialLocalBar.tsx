import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalBar'

      short_name='LocalBar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-.425 0-.713-.288Q6 20.425 6 20t.287-.712Q6.575 19 7 19h4v-5L3.35 5.4q-.15-.175-.25-.438Q3 4.7 3 4.45q0-.6.425-1.025Q3.85 3 4.45 3h15.1q.6 0 1.025.425.425.425.425 1.05 0 .225-.1.487-.1.263-.25.438L13 14v5h4q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 21 17 21Zm.45-14h9.1l1.8-2H5.65ZM12 12.1 14.775 9h-5.55Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialLocalBar.displayName = 'AmauiIconMaterialLocalBar';

export default IconMaterialLocalBar;
