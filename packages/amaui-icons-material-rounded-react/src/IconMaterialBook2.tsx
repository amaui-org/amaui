import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-347q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 267q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h420q33 0 56.5 23.5T800-800v501q0 8-6.5 14.5T770-270q-14 7-22 20t-8 30q0 17 8 30.5t22 19.5q14 6 22 16.5t8 22.5v10q0 17-11.5 29T760-80H300Zm0-80h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialBook2.displayName = 'AmauiIconMaterialBook2';

export default IconMaterialBook2;
