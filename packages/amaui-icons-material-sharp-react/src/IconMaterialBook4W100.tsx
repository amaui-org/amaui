import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook4W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book4W100'

      short_name='Book4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132q-33.333 0-56.667-22.75Q172-177.5 172-210v-538q0-33.333 23-56.667Q218-828 252-828h408v568H252q-22.1 0-37.05 15Q200-230 200-209.5t14.95 35Q229.9-160 252-160h508v-588h28v616H252Zm76-156h304v-512H328v512Zm-28 0v-512h-48q-22.1 0-37.05 15.5Q200-769 200-748v479q11-8 23.983-13.5Q236.967-288 252-288h48ZM200-800v531-531Z"/>
    </Icon>
  );
});

IconMaterialBook4W100.displayName = 'AmauiIconMaterialBook4W100';

export default IconMaterialBook4W100;
