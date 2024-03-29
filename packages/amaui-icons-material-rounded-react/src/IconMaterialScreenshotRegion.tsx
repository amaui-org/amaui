import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotRegion = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegion'

      short_name='ScreenshotRegion'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 976q-17 0-28.5-11.5T680 936v-80h-80q-17 0-28.5-11.5T560 816q0-17 11.5-28.5T600 776h80v-80q0-17 11.5-28.5T720 656q17 0 28.5 11.5T760 696v80h80q17 0 28.5 11.5T880 816q0 17-11.5 28.5T840 856h-80v80q0 17-11.5 28.5T720 976ZM200 776v-80q0-17 11.5-28.5T240 656q17 0 28.5 11.5T280 696v80h80q17 0 28.5 11.5T400 816q0 17-11.5 28.5T360 856h-80q-33 0-56.5-23.5T200 776Zm40-280q-17 0-28.5-11.5T200 456v-80q0-33 23.5-56.5T280 296h80q17 0 28.5 11.5T400 336q0 17-11.5 28.5T360 376h-80v80q0 17-11.5 28.5T240 496Zm480 0q-17 0-28.5-11.5T680 456v-80h-80q-17 0-28.5-11.5T560 336q0-17 11.5-28.5T600 296h80q33 0 56.5 23.5T760 376v80q0 17-11.5 28.5T720 496Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegion.displayName = 'AmauiIconMaterialScreenshotRegion';

export default IconMaterialScreenshotRegion;
