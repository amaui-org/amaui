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
      <path d="m457 670-76-76 287-287 76 76-287 287Zm0-40 248-247-37-37-247 248 36 36Zm79 213 28-28h323v28H536Zm-300 1q-22.473 0-43.237-5Q172 834 152 823l186-186 101 101-52 55q-25 26-58.5 38.5T260 844h-24Zm0-28h24q30 0 58-11.5t49-32.5l33-33-62-62-134 133q5 3 14.346 4.5T236 816Zm469-433-37-37 37 37ZM338 677Z"/>
    </Icon>
  );
});

IconMaterialSurgicalW100.displayName = 'AmauiIconMaterialSurgicalW100';

export default IconMaterialSurgicalW100;
