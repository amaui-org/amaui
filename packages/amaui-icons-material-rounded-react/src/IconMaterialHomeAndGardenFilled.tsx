import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAndGardenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenFilled'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M641-26q-20 12-41.5 19T555 0q-64 0-109-45.5T401-156q0-23 6.5-44t19.5-40q-13-19-19.5-41t-6.5-45q0-64 45-109t109-45q23 0 45 6.5t41 19.5q19-13 41-19.5t45-6.5q64 0 109 44.5T881-328q0 23-6.5 45T855-242q13 20 19.5 42.5T881-154q0 64-45.5 109T725 0q-23 0-44-7t-40-19Zm0-158q23 0 39.5-16.5T697-240q0-23-16.5-39.5T641-296q-23 0-39.5 16.5T585-240q0 23 16.5 39.5T641-184Zm-401 24q-33 0-56.5-23.5T160-240v-322h-36q-21 0-28.5-19.5T105-615l325-264q22-18 50-18t50 18l325 264q17 14 9.5 33.5T836-562h-36v42h-80v-102L480-818 240-622v382h120v80H240Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenFilled.displayName = 'AmauiIconMaterialHomeAndGardenFilled';

export default IconMaterialHomeAndGardenFilled;
