import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuietTimeActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveW100'

      short_name='QuietTimeActive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.2 17.225-.525-.525q.55-.475 1.013-1.012.462-.538.812-1.188-2.15-.2-4.075-1.1-1.925-.9-3.45-2.425Q11.45 9.45 10.55 7.537q-.9-1.912-1.075-4.062-.65.35-1.2.812-.55.463-1 1.013l-.5-.5Q7.45 4 8.3 3.4q.85-.6 1.85-1 0 2.3.85 4.4.85 2.1 2.475 3.725T17.2 13q2.1.85 4.4.85-.4 1-1 1.85-.6.85-1.4 1.525Zm.25 4.05-2.625-2.625q-.8.325-1.637.5-.838.175-1.713.175-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-.875.175-1.713.175-.837.5-1.637l-2.6-2.6.5-.5 16.7 16.7Zm-5.975-2.65q.725 0 1.45-.125t1.375-.375L11.075 12.9l-5.2-5.2q-.25.675-.375 1.387-.125.713-.125 1.438 0 3.375 2.363 5.737 2.362 2.363 5.737 2.363Zm-2.4-5.725Zm1.9-1.9Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveW100.displayName = 'AmauiIconMaterialQuietTimeActiveW100';

export default IconMaterialQuietTimeActiveW100;
