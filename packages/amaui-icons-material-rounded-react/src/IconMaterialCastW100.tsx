import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastW100'

      short_name='Cast'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.7 18.7h.7q.225 0 .35-.15.125-.15.075-.35-.125-.35-.4-.625t-.625-.4q-.2-.05-.35.075-.15.125-.15.35v.7q0 .175.113.287.112.113.287.113Zm4.55 0q.15 0 .25-.113.1-.112.1-.237-.125-2-1.538-3.412Q5.65 13.525 3.65 13.4q-.125 0-.237.1-.113.1-.113.25 0 .125.1.238.1.112.25.137 1.725.15 2.912 1.337Q7.75 16.65 7.875 18.35q.025.15.137.25.113.1.238.1Zm3.7 0q.15 0 .25-.1t.1-.25q-.075-1.775-.775-3.313-.7-1.537-1.862-2.7-1.163-1.162-2.7-1.862-1.538-.7-3.313-.775-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1q3.25.125 5.538 2.412Q11.475 15.1 11.6 18.35q0 .15.1.25t.25.1ZM4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425h-4.55q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.55q.35 0 .575-.225Q20 17.55 20 17.2V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8v.55q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3Zm6.85 7.05Z"/>
    </Icon>
  );
});

IconMaterialCastW100.displayName = 'AmauiIconMaterialCastW100';

export default IconMaterialCastW100;
