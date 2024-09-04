import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVo2MaxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vo2MaxW100'

      short_name='Vo2Max'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-212v-351l262-205v-100h28v99l262 207v82h-28v-70L456-674v462h-28v-483l-60-49-61 49v483H92Zm28-28h159v-434L120-549v309Zm396 28v-208h148v208H516Zm28-28h92v-152h-92v152Zm180 108v-118h122v-62H724v-28h150v118H752v62h122v28H724ZM200-457Zm336 0Z"/>
    </Icon>
  );
});

IconMaterialVo2MaxW100.displayName = 'AmauiIconMaterialVo2MaxW100';

export default IconMaterialVo2MaxW100;
