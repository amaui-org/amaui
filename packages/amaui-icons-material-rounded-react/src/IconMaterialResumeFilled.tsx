import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResumeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResumeFilled'

      short_name='Resume'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M240 776V376q0-17 11.5-28.5T280 336q17 0 28.5 11.5T320 376v400q0 17-11.5 28.5T280 816q-17 0-28.5-11.5T240 776Zm221 4q-20 12-40.5 0T400 745V407q0-23 20.5-35t40.5 0l282 170q20 12 20 34t-20 34L461 780Z"/>
    </Icon>
  );
});

IconMaterialResumeFilled.displayName = 'AmauiIconMaterialResumeFilled';

export default IconMaterialResumeFilled;
