import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirW100'

      short_name='Air'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 19.05q-.65 0-1.2-.338-.55-.337-.85-.887-.125-.2-.012-.337.112-.138.337-.138.1 0 .188.05.087.05.137.15.225.35.6.575.375.225.8.225.675 0 1.163-.487.487-.488.487-1.163t-.487-1.163q-.488-.487-1.163-.487H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.5q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.663-.688.687-1.663.687ZM3 9.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.5q.9 0 1.525-.625.625-.625.625-1.525 0-.9-.625-1.525Q16.4 4.65 15.5 4.65q-.7 0-1.225.362-.525.363-.75.938-.05.1-.125.15-.075.05-.175.05-.225 0-.338-.15-.112-.15-.037-.35.35-.775 1.063-1.238.712-.462 1.587-.462 1.2 0 2.025.825T18.35 6.8q0 1.2-.825 2.025T15.5 9.65Zm16.65 7.5q-.2.075-.35-.037-.15-.113-.15-.338 0-.1.05-.175.05-.075.15-.125.575-.225.938-.75.362-.525.362-1.225 0-.9-.625-1.525-.625-.625-1.525-.625H3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h15.5q1.2 0 2.025.825t.825 2.025q0 .875-.462 1.587-.463.713-1.238 1.063Z"/>
    </Icon>
  );
});

IconMaterialAirW100.displayName = 'AmauiIconMaterialAirW100';

export default IconMaterialAirW100;
