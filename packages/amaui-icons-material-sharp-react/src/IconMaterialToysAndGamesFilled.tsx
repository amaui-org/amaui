import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToysAndGamesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysAndGamesFilled'

      short_name='ToysAndGames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-272q0-16 10.5-27t25.5-11q8 0 15.5 2.5T186-300q13 8 26 14t28 6q33 0 56.5-23.5T320-360q0-33-23.5-56.5T240-440q-15 0-29 5t-25 15q-6 5-14 7.5t-16 2.5q-15 0-25.5-11T120-448v-152q0-17 11.5-28.5T160-640h150q-5-15-7.5-30t-2.5-30q0-75 52.5-127.5T480-880q75 0 127.5 52.5T660-700q0 15-2.5 30t-7.5 30h150q17 0 28.5 11.5T840-600v152q0 17-11.5 28.5T800-408q-8 0-14-3.5t-12-8.5q-11-10-25-15t-29-5q-33 0-56.5 23.5T640-360q0 33 23.5 56.5T720-280q15 0 29-5t25-15q5-5 11.5-8.5T800-312q17 0 28.5 11.5T840-272v152q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-152Z"/>
    </Icon>
  );
});

IconMaterialToysAndGamesFilled.displayName = 'AmauiIconMaterialToysAndGamesFilled';

export default IconMaterialToysAndGamesFilled;
