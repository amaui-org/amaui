import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRotationUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRotationUpFilled'

      short_name='ScreenRotationUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M567-160H320q-33 0-56.5-23.5T240-240v-407l80 80v327h247l-45-45q-11-11-11-27.5t11-28.5q12-12 28.5-12t28.5 12l113 113q12 12 12 28t-12 28L578-58q-12 12-28 11.5T522-59q-11-12-11.5-28t11.5-28l45-45Zm153-153-80-80v-327H393l45 45q11 11 11 27.5T438-619q-12 12-28.5 12T381-619L268-732q-12-12-12-28t12-28l114-114q12-12 28-11.5t28 12.5q11 12 11.5 28T438-845l-45 45h247q33 0 56.5 23.5T720-720v407Z"/>
    </Icon>
  );
});

IconMaterialScreenRotationUpFilled.displayName = 'AmauiIconMaterialScreenRotationUpFilled';

export default IconMaterialScreenRotationUpFilled;
