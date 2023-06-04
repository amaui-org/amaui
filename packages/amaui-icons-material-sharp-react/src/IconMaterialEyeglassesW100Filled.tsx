import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEyeglassesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeglassesW100Filled'

      short_name='Eyeglasses'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M305 698q32 0 58.5-19t37.5-50l12-39q17-51-9.5-93.5T329 454H186l19 156q5 38 33.5 63t66.5 25Zm350 0q38 0 66.5-25t33.5-63l19-156H632q-48 0-75 42.5T547 590l12 39q11 31 37.5 50t58.5 19Zm-350 28q-48 0-84.5-32T178 613l-20-159h-32v-28h203q32 0 60 18t46 50h91q18-32 46-50t60-18h202v28h-32l-20 159q-6 49-42.5 81T655 726q-42 0-75-24t-47-63l-12-39q-3-10-5-21t-4-33h-64q-2 20-4 31.5t-5 21.5l-12 39q-13 39-46.5 63.5T305 726Z"/>
    </Icon>
  );
});

IconMaterialEyeglassesW100Filled.displayName = 'AmauiIconMaterialEyeglassesW100Filled';

export default IconMaterialEyeglassesW100Filled;
