import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThunderstormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormFilled'

      short_name='Thunderstorm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.9 21.325-.85-.425q-.425-.225-.525-.7-.1-.475.225-.85l1.75-2q.15-.175.35-.263.2-.087.4-.087.65 0 .913.575.262.575-.163 1.075l-.9 1.025.85.425q.425.225.525.7.1.475-.225.85l-1.75 2q-.15.175-.35.263-.2.087-.4.087-.65 0-.912-.575-.263-.575.162-1.075Zm-6 0-.85-.425q-.425-.225-.525-.7-.1-.475.225-.85l1.75-2q.375-.05.788-.2Q9.7 17 9.25 17q.65 0 .913.575.262.575-.163 1.075l-.9 1.025.85.425q.425.225.525.7.1.475-.225.85l-1.75 2q-.375.05-.787.2-.413.15.037.15-.65 0-.912-.575-.263-.575.162-1.075ZM7.5 16q-2.275 0-3.887-1.613Q2 12.775 2 10.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 2 12 2q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 9.725 22 11.5q0 1.875-1.312 3.188Q19.375 16 17.5 16Z"/>
    </Icon>
  );
});

IconMaterialThunderstormFilled.displayName = 'AmauiIconMaterialThunderstormFilled';

export default IconMaterialThunderstormFilled;
