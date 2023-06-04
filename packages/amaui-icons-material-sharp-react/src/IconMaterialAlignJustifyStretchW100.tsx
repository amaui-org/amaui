import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyStretchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyStretchW100'

      short_name='AlignJustifyStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M800 924V228h28v696h-28Zm-668 0V228h28v696h-28Zm362-454v-68h200v68H494Zm-228 0v-68h200v68H266Zm228 280v-68h200v68H494Zm-228 0v-68h200v68H266Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyStretchW100.displayName = 'AmauiIconMaterialAlignJustifyStretchW100';

export default IconMaterialAlignJustifyStretchW100;
