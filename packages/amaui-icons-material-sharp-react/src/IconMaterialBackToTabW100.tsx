import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackToTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabW100'

      short_name='BackToTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M396 592 160 356v160h-28V308h208v28H179l237 236-20 20ZM132 844V616h28v200h308v28H132Zm668-240V336H440v-28h388v296h-28Zm28 100v140H568V704h260Z"/>
    </Icon>
  );
});

IconMaterialBackToTabW100.displayName = 'AmauiIconMaterialBackToTabW100';

export default IconMaterialBackToTabW100;
