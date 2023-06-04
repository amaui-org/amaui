import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurgicalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurgicalW100'

      short_name='Surgical'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m536 843 28-28h309q5.95 0 9.975 4.035 4.025 4.035 4.025 10T882.975 839q-4.025 4-9.975 4H536Zm-79-173-76-76 266-266q8.8-9 20.9-9 12.1 0 21.1 9l34 34q9 8.8 9 20.9 0 12.1-9 21.1L457 670Zm0-40 248-247-37-37-247 248 36 36ZM236 844q-22.473 0-43.237-5Q172 834 152 823l186-186 67 67q7.467 6.844 11.733 15.644 4.267 8.8 4.267 18.578 0 9.778-4 18.847-4 9.068-11 15.931l-19 20q-25 26-58.5 38.5T260 844h-24Zm0-28h24q30 0 58-11.5t49-32.5l19-19q6-6 5.5-14.5T384 723l-46-46-134 133q5 3 14.346 4.5T236 816Zm469-433-37-37 37 37ZM338 677Z"/>
    </Icon>
  );
});

IconMaterialSurgicalW100.displayName = 'AmauiIconMaterialSurgicalW100';

export default IconMaterialSurgicalW100;
