import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDigitalWellbeingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DigitalWellbeingW100'

      short_name='DigitalWellbeing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-606q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm0 464L268-382q-14-14-21-32.5t-7-39.853q0-41.994 28.929-70.821Q297.857-554 340-554q20.449 0 37.724 7.5Q395-539 410-524l70 70 70-70q14-14 32-22t38.432-8Q662-554 691-525.174q29 28.827 29 70.821 0 21.353-7 39.853T692-382L480-170Zm0-40 192-192q11-11 15.5-24t4.5-27.5q0-29-21-50.75T619.895-526q-13.895 0-25.431 4.375Q582.929-517.25 572-506l-92 92-90-90q-7.68-8.25-19.84-15.125T340.439-526Q310-526 289-504.5t-21 50.167q0 14.333 4.5 27.833Q277-413 288-402l192 192Zm0-496Zm0 338Z"/>
    </Icon>
  );
});

IconMaterialDigitalWellbeingW100.displayName = 'AmauiIconMaterialDigitalWellbeingW100';

export default IconMaterialDigitalWellbeingW100;
