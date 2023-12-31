import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSweepW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SweepW100'

      short_name='Sweep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-266v-28h188v28H426Zm-184-10L52-466l20-20 170 170 366-366 20 20-386 386Zm344-150v-28h188v28H586Zm160-160v-28h188v28H746Z"/>
    </Icon>
  );
});

IconMaterialSweepW100.displayName = 'AmauiIconMaterialSweepW100';

export default IconMaterialSweepW100;
