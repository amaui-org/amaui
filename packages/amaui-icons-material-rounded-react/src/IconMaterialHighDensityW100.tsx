import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighDensityW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensityW100'

      short_name='HighDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 884v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28ZM232 776q-25 0-42.5-17.5T172 716V328q0-25 17.5-42.5T232 268h388q25 0 42.5 17.5T680 328v388q0 25-17.5 42.5T620 776H232Zm0-28h388q14 0 23-9t9-23V328q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v388q0 14 9 23t23 9Zm-32 0V296v452Zm560-452v-28q12 0 20 8t8 20h-28Zm0 588v-28h28q0 12-8 20t-20 8Zm-560 0q-12 0-20-8t-8-20h28v28Z"/>
    </Icon>
  );
});

IconMaterialHighDensityW100.displayName = 'AmauiIconMaterialHighDensityW100';

export default IconMaterialHighDensityW100;
