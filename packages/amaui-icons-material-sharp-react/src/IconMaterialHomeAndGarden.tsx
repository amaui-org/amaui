import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAndGarden = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGarden'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M641-26q-20 12-41.5 19T555 0q-64 0-109-45.5T401-156q0-23 6.5-44t19.5-40q-13-19-19.5-41t-6.5-45q0-64 45-109t109-45q23 0 45 6.5t41 19.5q19-13 41-19.5t45-6.5q64 0 109 44.5T881-328q0 23-6.5 45T855-242q13 20 19.5 42.5T881-154q0 64-45.5 109T725 0q-23 0-44-7t-40-19Zm134-183-36-32 40-34q11-9 16.5-22.5T801-326q0-31-21.5-52.5T727-400q-16 0-29.5 5.5T675-378l-35 40-34-40q-9-11-22.5-16.5T554-400q-30 0-51.5 22T481-324q0 15 6.5 28.5T506-271l36 30-40 34q-10 9-15.5 22t-5.5 29q0 32 21.5 54T554-80q15 0 29.5-7t26.5-21l30-34 35 40q9 11 22.5 16.5T727-80q31 0 52.5-22t21.5-54q0-14-6.5-28T775-209Zm-134 25q23 0 39.5-16.5T697-240q0-23-16.5-39.5T641-296q-23 0-39.5 16.5T585-240q0 23 16.5 39.5T641-184Zm-481 24v-402H40l440-358 440 358H800v42h-80v-102L480-818 240-622v382h120v80H160Zm481-80Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGarden.displayName = 'AmauiIconMaterialHomeAndGarden';

export default IconMaterialHomeAndGarden;
