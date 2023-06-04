import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTuneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TuneW100'

      short_name='Tune'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 18.35v-.7h4.7v.7Zm0-12v-.7h8.7v.7Zm8 14v-4.7h.7v2h8v.7h-8v2Zm-4-6v-2h-4v-.7h4v-2h.7v4.7Zm4-2v-.7h8.7v.7Zm4-4v-4.7h.7v2h4v.7h-4v2Z"/>
    </Icon>
  );
});

IconMaterialTuneW100.displayName = 'AmauiIconMaterialTuneW100';

export default IconMaterialTuneW100;
