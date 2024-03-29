import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveModerator = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModerator'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.85 16.05-1.5-1.55q.3-.8.475-1.663Q18 11.975 18 11.1V6.375l-6-2.25L8.35 5.5 6.8 3.95l4.5-1.675q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 1.275-.288 2.525-.287 1.25-.862 2.425Zm.25 5.85-2.55-2.55q-.8.85-1.775 1.45-.975.6-2.05.975-.15.05-.337.075-.188.025-.388.025t-.387-.012q-.188-.013-.338-.063-3.2-1.075-5.237-4.088Q4 14.7 4 11.1V6.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Zm-8.525-8.525ZM12 19.9q.875-.275 1.675-.775t1.475-1.175L6 8.8v2.3q0 3.025 1.7 5.5t4.3 3.3Zm.875-9.875Z"/>
    </Icon>
  );
});

IconMaterialRemoveModerator.displayName = 'AmauiIconMaterialRemoveModerator';

export default IconMaterialRemoveModerator;
