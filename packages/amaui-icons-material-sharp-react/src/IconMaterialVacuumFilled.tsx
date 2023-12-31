import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVacuumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VacuumFilled'

      short_name='Vacuum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T200-200q0-17-11.5-28.5T160-240q-17 0-28.5 11.5T120-200q0 17 11.5 28.5T160-160Zm160 80q20-26 30-57t10-63q0-83-58.5-141.5T160-400q-20 0-40.5 4T80-384v-216h120v-136q0-77 53.5-130.5T384-920q56 0 102 30.5t68 81.5l273 648h93v80H640v-80h100L481-776q-12-29-38.5-46.5T384-840q-43 0-73.5 30.5T280-736v136h80q66 0 113 47t47 113v360H320Z"/>
    </Icon>
  );
});

IconMaterialVacuumFilled.displayName = 'AmauiIconMaterialVacuumFilled';

export default IconMaterialVacuumFilled;
