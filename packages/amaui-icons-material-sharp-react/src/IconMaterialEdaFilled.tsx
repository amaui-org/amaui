import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEdaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdaFilled'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 1016V736h218l136 181 247-247 94-57 106 79-324 324H120Zm160-440V176h80v400h80V136h80v440h80V216h80v383L482 795 378 656H120V256h80v320h80Z"/>
    </Icon>
  );
});

IconMaterialEdaFilled.displayName = 'AmauiIconMaterialEdaFilled';

export default IconMaterialEdaFilled;
