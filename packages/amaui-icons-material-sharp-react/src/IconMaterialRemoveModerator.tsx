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
      <path d="m18.85 16.05-1.5-1.55q.3-.8.475-1.663Q18 11.975 18 11.1V6.375l-6-2.25L8.35 5.5 6.8 3.95 12 2l8 3v6.1q0 1.275-.288 2.525-.287 1.25-.862 2.425Zm.95 6.55-3.25-3.25q-.95.975-2.112 1.637Q13.275 21.65 12 22q-3.475-.875-5.737-3.988Q4 14.9 4 11.1V6.8L1.4 4.2l1.4-1.4 18.4 18.4Zm-9.225-9.225ZM12.85 10ZM12 19.9q.875-.275 1.675-.775t1.475-1.175L6 8.8v2.3q0 3.025 1.7 5.5t4.3 3.3Z"/>
    </Icon>
  );
});

IconMaterialRemoveModerator.displayName = 'AmauiIconMaterialRemoveModerator';

export default IconMaterialRemoveModerator;
