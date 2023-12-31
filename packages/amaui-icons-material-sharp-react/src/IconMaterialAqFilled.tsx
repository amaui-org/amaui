import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqFilled'

      short_name='Aq'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-254-26-39q-19 9-39 13.5t-41 4.5q-78 0-132-54t-54-132q0-77 54-131.5T656-647q77 0 130.5 54.5T840-461q0 40-16 76t-45 63l26 39-42 29Zm-643-29 133-356h64l134 356h-62l-32-91H214l-33 91h-61Zm536-44q14 0 26.5-3t24.5-8l-42-62 43-28 40 60q17-19 26-43t9-50q0-55-36.5-94.5T656-595q-54 0-91 39.5T528-461q0 55 37 94.5t91 39.5Zm-424-99h106l-51-144h-4l-51 144Z"/>
    </Icon>
  );
});

IconMaterialAqFilled.displayName = 'AmauiIconMaterialAqFilled';

export default IconMaterialAqFilled;
