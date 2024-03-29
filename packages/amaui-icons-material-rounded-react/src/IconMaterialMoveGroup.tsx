import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveGroup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveGroup'

      short_name='MoveGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816q-33 0-56.5-23.5T240 736v-40q0-17 11.5-28.5T280 656q17 0 28.5 11.5T320 696v40h480V336H320v40q0 17-11.5 28.5T280 416q-17 0-28.5-11.5T240 376V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320ZM160 976q-33 0-56.5-23.5T80 896V376q0-17 11.5-28.5T120 336q17 0 28.5 11.5T160 376v520h520q17 0 28.5 11.5T720 936q0 17-11.5 28.5T680 976H160Zm367-400H280q-17 0-28.5-11.5T240 536q0-17 11.5-28.5T280 496h247l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L548 668q-11 11-27.5 11.5T492 668q-11-11-11-28t11-28l35-36Z"/>
    </Icon>
  );
});

IconMaterialMoveGroup.displayName = 'AmauiIconMaterialMoveGroup';

export default IconMaterialMoveGroup;
