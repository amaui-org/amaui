import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysAndGames = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGames'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160h560v-46q-10 3-19.5 4.5T720-200q-66 0-113-47t-47-113q0-66 47-113t113-47q11 0 20.5 1.5T760-514v-46H550v-68q14-15 22-33.5t8-38.5q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 20 8 38.5t22 33.5v68H200v46q10-3 19.5-4.5T240-520q66 0 113 47t47 113q0 66-47 113t-113 47q-11 0-20.5-1.5T200-206v46Zm640-152v232H120v-230h58q11 14 27.5 22t34.5 8q33 0 56.5-23.5T320-360q0-33-23.5-56.5T240-440q-18 0-34.5 8T178-410h-58v-230h190q-5-15-7.5-30t-2.5-30q0-75 52.5-127.5T480-880q75 0 127.5 52.5T660-700q0 15-2.5 30t-7.5 30h190v232h-56q-11-15-28-23.5t-36-8.5q-33 0-56.5 23.5T640-360q0 33 23.5 56.5T720-280q19 0 36-8.5t28-23.5h56ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialToysAndGames.displayName = 'AmauiIconMaterialToysAndGames';

export default IconMaterialToysAndGames;
