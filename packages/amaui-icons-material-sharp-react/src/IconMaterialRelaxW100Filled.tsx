import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRelaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RelaxW100Filled'

      short_name='Relax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M479 900 205 624q-17-17-30-35.5T153 550h323q27 0 46 19.5t19 46.5q0 27-19.5 46.5T475 682q-15 0-28.5-6.5T423 657l-29 8q14 21 35 33t46 12q39 0 66.5-27.5T569 616q0-20-7-36.5T542 550h93q39 0 66.5-27.5T729 456q0-39-27.5-66.5T635 362q-25 0-46 12t-35 33l29 8q10-12 23.5-18.5T635 390q27 0 46.5 19.5T701 456q0 27-19.5 46.5T635 522H142q-5-16-7.5-32t-2.5-33q0-81 50-137t122-56q39 0 75.5 16t65.5 47l35 37 33-35q30-32 67-48.5t75-16.5q72 0 122.5 56T828 456q0 46-19 89.5T755 624L479 900Z"/>
    </Icon>
  );
});

IconMaterialRelaxW100Filled.displayName = 'AmauiIconMaterialRelaxW100Filled';

export default IconMaterialRelaxW100Filled;
