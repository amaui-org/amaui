import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVo2MaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vo2MaxW100Filled'

      short_name='Vo2Max'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-212v-208h148v208H516Zm28-28h92v-152h-92v152Zm180 108v-118h122v-62H724v-28h150v118H752v62h122v28H724ZM92-212v-351l262-205v-100h28v99l262 207v82H456v268h-28v-483l-60-49-61 49v483H92Z"/>
    </Icon>
  );
});

IconMaterialVo2MaxW100Filled.displayName = 'AmauiIconMaterialVo2MaxW100Filled';

export default IconMaterialVo2MaxW100Filled;
